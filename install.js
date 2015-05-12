#!/usr/bin/env node

var pkg = require('./package.json');
var fs = require('fs')
var os = require('os')
var path = require('path')
var extract = require('extract-zip')
var download = require('electron-download')

// temporary
// var version = pkg.version || '0.26.0'
var version = '0.26.0'
var platform = os.platform()

function onerror (err) {
  throw err
}

var paths = {
  darwin: path.join(__dirname, './dist/Electron.app/Contents/MacOS/Electron'),
  linux: path.join(__dirname, './dist/electron'),
  win32: path.join(__dirname, './dist/electron.exe')
}

if (!paths[platform]) throw new Error('Unknown platform: ' + platform)

// downloads if not cached
download({version: version}, extractFile)

// unzips and makes path.txt point at the correct executable
function extractFile (err, zipPath) {
  if (err) return onerror(err)
  fs.writeFile(path.join(__dirname, 'path.txt'), paths[platform], function (err) {
    if (err) return onerror(err)
    extract(zipPath, {dir: path.join(__dirname, 'dist')}, function (err) {
      if (err) return onerror(err)
    })
  })
}
