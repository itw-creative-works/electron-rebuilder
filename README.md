<p align="center">
  <a href="https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-brandmark-black-x.svg">
    <img src="https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-brandmark-black-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/itw-creative-works/electron-rebuilder.svg">
  <br>
  <img src="https://img.shields.io/david/itw-creative-works/electron-rebuilder.svg">
  <img src="https://img.shields.io/david/dev/itw-creative-works/electron-rebuilder.svg">
  <img src="https://img.shields.io/bundlephobia/min/electron-rebuilder.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/itw-creative-works/electron-rebuilder.svg">
  <img src="https://img.shields.io/npm/dm/electron-rebuilder.svg">
  <img src="https://img.shields.io/node/v/electron-rebuilder.svg">
  <img src="https://img.shields.io/website/https/itwcreativeworks.com.svg">
  <img src="https://img.shields.io/github/license/itw-creative-works/electron-rebuilder.svg">
  <img src="https://img.shields.io/github/contributors/itw-creative-works/electron-rebuilder.svg">
  <img src="https://img.shields.io/github/last-commit/itw-creative-works/electron-rebuilder.svg">
  <br>
  <br>
  <a href="https://itwcreativeworks.com">Site</a> | <a href="https://www.npmjs.com/package/electron-rebuilder">NPM Module</a> | <a href="https://github.com/itw-creative-works/electron-rebuilder">GitHub Repo</a>
  <br>
  <br>
  <strong>Electron Rebuilder</strong> automatically rebuilds for the correct Electron and Node.js abi versions.
</p>

## Install Electron Rebuilder
### Install via npm
Install with npm if you plan to use **Electron Rebuilder** in a Node.js project.
```shell
npm install electron-rebuilder --save-dev
```

## Features
* Automatically rebuild for the correct Electron and Node.js abi version

## Example Setup
After installing via npm, simply put this in your `package.json`
```json
...
"main": "dist/index.js",
"scripts": {
  "rebuild": "node -e 'require(`electron-rebuilder`)'"
},
...
```

## Final Words
If you are still having difficulty, we would love for you to post a question to [the Electron Rebuilder issues page](https://github.com/itw-creative-works/electron-rebuilder/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)
