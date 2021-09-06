## 🤖 About 
EasyStart is a package that can easily create discord bot.
## 📝 Use It
```
npm i dis-easystart
```
## ✅ Example Bot
```js
const { EasyStart } = require('dis-easystart')

EasyStart({
    prefix_type: 'both', //true = slash only, false = only normal, both = slash and normal
    prefix: '!', // bot prefix
    database: '', //starts with mongodb://
    token: 'token', //bot token
    defaultCooldown: '3s' // default command cooldown
})
```
https://github.com/DaneeSkripter/EasyStart-Example
