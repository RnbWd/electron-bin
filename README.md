electron-bin
---

[![Build Status](https://img.shields.io/travis/RnbWd/electron-bin.svg?style=flat-square)](https://travis-ci.org/RnbWd/electron-bin)
[![Dependency Status](https://img.shields.io/david/RnbWd/electron-bin.svg?style=flat-square)](https://david-dm.org/RnbWd/electron-bin)

Similar to [electron-prebuilt](https://github.com/mafintosh/electron-prebuilt) - (it's actually a fork and identical to this [pull-request](https://github.com/mafintosh/electron-prebuilt/pull/23)) but my intention is to focus on global cmd over local dependencies. I can't guarantee the same behavior as `electron-prebuilt` indefinitely.

## Installation

Download and install the latest build of electron for your OS

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
MIT

## Credits

[atom/electron](https://github.com/atom/electron)

[mafintosh/electron-prebuilt](https://github.com/mafintosh/electron-prebuilt)

And everyone who contributed to those libraries
