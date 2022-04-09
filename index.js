exports.EasyClient = async function({defaultCooldown = '', prefix = '', devServerID = '', token = ''}) {
  const axios = require('axios')
  const EasyUpdater = await axios.get('https://registry.npmjs.org/dis-easystart')
  const stableVersion = EasyUpdater.data['dist-tags'].latest
  const version = require('./package.json').version
  const log = require('./log')
  if (stableVersion !== version && !version.includes('dev')) {
    log.updater('Please update EasyStart https://www.npmjs.com/package/dis-easystart')
  } else if (version.includes('dev')) {
    log.updater('You are using DEV version')
  } else {
    log.updater('You are using latest version!')
  }
  const { GClient, Plugins, Command, Component } = require('gcommands');
  const { Intents } = require('discord.js');
  const { join } = require('path');
  
  // Set the default cooldown for commands
  Command.setDefaults({
    cooldown: defaultCooldown,
  });
  
  // Set the default onError function for components
  Component.setDefaults({
    onError: (ctx, error) => {
      return ctx.reply('Oops! Something went wrong')
    } 
  });
  
  
  // Search for plugins in node_modules (folder names starting with gcommands-plugin-) or plugins folder
  Plugins.search(__dirname);
  
  const client = new GClient({
    // Register the directories where your commands/components/listeners will be located.
    dirs: [
      join(__dirname, 'commands'),
      join(__dirname, 'components'),
      join(__dirname, 'listeners')
    ],
    // Set the prefix for message commands
    messagePrefix: prefix,
    // Set the guild where you will be developing your bot. This is usefull cause guild slash commands update instantly.
    devGuildId: devServerID,
    // Set the intents you will be using (https://discordjs.guide/popular-topics/intents.html#gateway-intents)
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
  
  // Login to the discord API
  client.login(token);
  log.success(`Logged as ${client.user.tag}`)
}