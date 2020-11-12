const Discord = require('discord.js')
const { developers } = require('../../config.json')

exports.run = async(client, message, args) => {
    const avatar = message.author.avatarURL({size: 2048})
    const embed = new Discord.MessageEmbed()
    .setTitle('What do you want to report?')
    .setDescription('type cancel to cancel or c.')
    .setTimestamp()
    .setColor('RED')
    const filter = x => {
        return (x.author.id === message.author.id)
    }
    const answer = args.join(' ')
    
    const msg = await message.channel.send(embed)
    const report = await message.channel.awaitMessages(filter, {max: 10000})
    
    if(!report.size) return message.channel.send('You did not answer.')
    
    const cancel = ['cancel', 'c']
    
    if(cancel.includes(cancel)) return message.channel.send('Canceled')
    if(answer.includes(answer)) return message.channel.send('Success sent ' + answer)
    
    const errorEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, avatar)
    .setTitle('Reported from ' + message.author.tag)
    .setDescription(answer)
    .setTimestamp()
    .setColor('ORANGE')
    
    try{
        message.developers.send()
    }catch(err) {
        console.log(err)
    }
}

exports.help = {
    name: "report",
    description: "Sends a reported error to the devs.",
    usage: "/report",
    example: "/report"
}

exports.conf = {
    aliases: ['dev call', 'report error', 'outrage'],
    cooldown: 10
}