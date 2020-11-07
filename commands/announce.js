const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You don\'t have permissions to use that command!')
    let  channelMention = message.mentions.channels.first()
    if(!channelMention) return message.channel.send('Mention a channel first!')
    
    let color = args[1].toUpperCase()
    if(args[1] === 'grey') {
        let grey = 'GRAY'
    }
    if(!color) return message.channel.send('Please provide a color for the announcement')
    
    let msg = message.content.split(`/announce ${args[0]} ${args[1]} `).join(' ');
    if(!msg) return message.channel.send('Provide a message to announce')
    let embed = new Discord.MessageEmbed();
    embed.setTitle(`Announcement!`)
    embed.setDescription(`${msg}`)
    embed.setColor(`${color}`)
    
    message.channel.bulkDelete(1, true)
    try{
        channelMention.send(embed)
    }catch(err) {
        console.error(err)
    }
}