const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You don\'t have permissions to use that command!')
    let split = '&&'
    args = args.join(' ').split(split)
    for(var i = 0; i < args.length; i++) args[i] = args[i].trim()
    
    let announceChnl = message.mentions.channels.first()
    if(!announceChnl) return message.channel.send('Please mention a channel')
    let color = args[1].toUpperCase()
    if(args[2] === 'grey') {
        let grey = 'GRAY'
    }
    if(!color) return message.channel.send('Please provide a color for the announcement')
    let title = args[2]
    if(!title) return message.channel.send('Please provide a title for the announcement')
    let msg = args[3]
    if(!msg) return message.channel.send('Provide a message to announce')
    let embed = new Discord.MessageEmbed();
    embed.setTitle(`${title}`)
    embed.setDescription(`${msg}`)
    embed.setColor(`${color}`)
    await message.delete()
    try{
        announceChnl.send(embed)
    }catch(err) {
        console.error(err)
    }
}

exports.help = {
    name: "announce",
    description: "Sends an announcement.",
    usage: "/announce <#channel> && <color> && <title> && <message>",
    example: "/announce #announcements && red && Announcement Title && Announcement message"
}

exports.conf = {
    aliases: ['announcement'],
    cooldown: 5
}