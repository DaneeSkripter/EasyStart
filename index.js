exports.EasyStart = function(options) {
    console.log('\x1b[93m', '[EasyStart]', '\x1b[32m', 'Loaded!', '\x1b[0m')
    const { Intents } = require("discord.js");
    const { join } = require('path');
    const { GCommandsClient } = require("gcommands");
    const client = new GCommandsClient({
        cmdDir: 'commands/',
        eventDir: 'events/',
        caseSensitiveCommands: false, // true or false | whether to match the commands' caps
        caseSensitivePrefixes: false, // true or false | whether to match the prefix in message commands
        unkownCommandMessage: false, // true or false | send unkownCommand Message
        language: "english", // english, spanish, portuguese, russian, german, czech, slovak, turkish, polish, indonesian, italian
        commands: {
          slash: options.prefix_type, //true = slash only, false = only normal, both = slash and normal
          context: "false", // https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptionsCommandsContext
          prefix: options.prefix, // for normal commands
        },
        defaultCooldown: options.defaultCooldown,
        database: options.database,
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
        /* DB SUPPORT
         * redis://user:pass@localhost:6379
         * mongodb://user:pass@localhost:27017/dbname
         * sqlite://path/to/database.sqlite
         * postgresql://user:pass@localhost:5432/dbname
         * mysql://user:pass@localhost:3306/dbname
         */
      });

      client.on("ready", () => {
        console.log('\x1b[93m', '[EasyStart]', '\x1b[32m', 'The Bot is Ready!', '\x1b[0m')
      });
      client.on("debug", console.log); // warning | this also enables the default discord.js debug logging
      client.on("log", console.log);
      
      client.login(options.token);
}


// options: prefix_type, prefix, database, token, defaultCooldown