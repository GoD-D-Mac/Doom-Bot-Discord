const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have permissions to use that command')
    
    let amount;
    if(!args[0]) return message.channel.send('You need to Specify a number to use that command')
    if(args[0] == 0) return message.channel.send('You can\'t use 0')
    if(isNaN(args[0])) return message.channel.send('That is not a number')
    if(parseInt(args[0]) == 0) return message.channel.send('That is not a number')
    if(parseInt(args[0]) < 0) {
        message.channel.send('You can\'t use negative numbers')
    } else {
        amount = parseInt(args[0])
    }
    message.channel.bulkDelete(amount + 1, true)
}