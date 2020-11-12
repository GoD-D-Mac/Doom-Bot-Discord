const Discord = require('discord.js')
const bot = require('./handler/client.js')
const client = new bot();

require('./handler/module.js')(client)
require('./handler/event.js')(client)

client.package = require('./package.json')
client.on('warn', console.warn)
client.on('error', console.error)
client.login(token).catch(console.error)
