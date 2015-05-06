#!/usr/bin/env node

var os = require('os')
var path = require('path')
var pathExists = require('path-exists');
var nugget = require('nugget')
var extract = require('extract-zip')
var fs = require('fs')
var pkg = require('./package.json')
var getHomePath = require('home-path')()
var platform = os.platform()
var arch = os.arch()

var version = pkg.electronVersion || '0.25.2'
var filename = 'electron-v' + version + '-' + platform + '-' + arch;
var zipname = filename + '.zip'
var url = 'https://github.com/atom/electron/releases/download/v' + version + '/electron-v' + version + '-' + platform + '-' + arch + '.zip'

function onerror (err) {
  throw err
}

var paths = {
  darwin: path.join(getHomePath, './.electron/'+filename+'/Electron.app/Contents/MacOS/Electron'),
  linux: path.join(getHomePath, './.electron/'+filename+'/electron'),
  win32: path.join(getHomePath, './.electron/'+filename+'/electron.exe')
}

if (!paths[platform]) throw new Error('Unknown platform: ' + platform)
console.log(pathExists.sync(paths[platform]));
nugget(url, {target: zipname, dir: __dirname, resume: true, verbose: true}, function (err) {
  if (err) return onerror(err)
  fs.writeFileSync(path.join(__dirname, 'path.txt'), paths[platform])
  extract(path.join(__dirname, zipname), {dir: path.join(getHomePath, './.electron/'+filename)}, function (err) {
    if (err) return onerror(err)
  })
})
