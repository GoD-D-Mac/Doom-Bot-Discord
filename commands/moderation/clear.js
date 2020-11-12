const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have permissions to use that command')
    
    if(message.mentions.channels.first()) {
        let chnlDelete = message.mentions.channels.first()
        if(!args[1]) return message.channel.send('You need to Specify a number to use that command')
        if(args[1] == 0) return message.channel.send('You can\'t use 0')
        if(isNaN(args[1])) return message.channel.send('That is not a number')
        if(parseInt(args[1]) == 0) return message.channel.send('That is not a number')
        if(parseInt(args[1]) < 0) {
        message.channel.send('You can\'t use negative numbers')
            
        } else {
            amount = parseInt(args[1])
        }
        chnlDelete.bulkDelete(amount, true)
    } else {
        chnlDelete = message.channel
        if(!args[0]) return message.channel.send('You need to Specify a number to use that command')
        if(args[0] == 0) return message.channel.send('You can\'t use 0')
        if(isNaN(args[0])) return message.channel.send('That is not a number')
        if(parseInt(args[0]) == 0) return message.channel.send('That is not a number')
        if(parseInt(args[0]) < 0) {
        message.channel.send('You can\'t use negative numbers')
        } else {
            amount = parseInt(args[0])
            
        }
        chnlDelete.bulkDelete(amount + 1)
    }
}

exports.help = {
    name: "clear",
    description: "Deletes a provided number of messages.",
    usage: "/clear <number>",
    example: "/clear 69"
}

exports.conf = {
    aliases: ['purge', 'del'],
    cooldown: 5
}