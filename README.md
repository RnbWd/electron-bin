electron-bin
---

[![Build Status](https://img.shields.io/travis/RnbWd/electron-bin.svg?style=flat-square)](https://travis-ci.org/RnbWd/electron-bin)
[![Dependency Status](https://img.shields.io/david/RnbWd/electron-bin.svg?style=flat-square)](https://david-dm.org/RnbWd/electron-bin)

Fork of [electron-prebuilt](https://github.com/mafintosh/electron-prebuilt)

Install [electron](https://github.com/atom/electron) (formerly called **atom-shell**) prebuilt binaries for command-line use using npm.

Works on Mac, Windows and Linux OSes that Electron supports (e.g. Electron [does not support Windows XP](https://github.com/atom/electron/issues/691)).

Electron is a javascript runtime that bundles Node.js and Chromium. You use it similar to the `node` command on the command line for executing javascript programs. This module helps you easily install the `electron` command for use on the command line without having to compile anything.

## Installation

Download and install the latest build of electron for your OS and add it to your ~~projects `package.json` as a `devDependency`~~ **HOME DIRECTORY** - `~/.electron/`:

```
npm install electron-bin --save-dev
```

This is the preferred way to use electron, as it doesn't require users to install electron globally.

You can also use the `-g` flag (global) to symlink it into your PATH:

```
npm install -g electron-bin
```

If that command fails with an `EACCESS` error you may have to run it again with `sudo`:

```
sudo npm install -g electron-bin
```

Now you can just run `electron` to run electron:

```
electron
```

## Usage

First you have to [write an electron application](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md)

Then you can run your app using:

```
electron your-app/
```

## Programmatic usage

If you require `electron-bin` inside your node app it will return the file path to the binary.
Use this to spawn electron

``` js
var electron = require('electron-bin')
var proc = require('child_process')

// will something similar to print /Users/rnb/.electron/.../Electron
console.log(electron)

// spawn electron
var child = proc.spawn(electron)
```

MIT
