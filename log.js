const colors = require('colors')

const updater = function (message) {
    console.log(colors.yellow('[EasyStart Updater] ') + message)
}

const success = function (message) {
    console.log(colors.yellow('[EasyStart ') + '|' + colors.green(' SUCCESS] ') + message)
}

module.exports.success = success
module.exports.updater = updater