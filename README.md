## 🤖 About 
EasyStart is a package that can easily create discord bot.
## 📝 Use It
```sh
npm i dis-easystart

# Dev Version
npm i dis-easystart@dev
```
## ✅ Example Bot
```js
const { EasyClient } = require('dis-easystart')

EasyClient({
    prefix: '!', // bot prefix
    token: 'token', //bot token
    defaultCooldown: '3s', // default command cooldown
    devServerID: '', // ID of your testing/dev server
})
```
https://github.com/DaneeSkripter/EasyStart-Example

## Supported Versions

- ✅ = These versions are recommended for use.
- :x: = These versions are not recommended for use.

| Version | Supported          |
| ------- | ------------------ |
| 2.1.x   | :white_check_mark: |
| 2.0.0   | :white_check_mark: |
| < 1.1.1  | :x:                |
| 1.1.2   | :white_check_mark: |

