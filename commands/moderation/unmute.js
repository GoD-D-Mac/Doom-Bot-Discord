const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have permissions to use that command.')
    let user = message.mentions.users.first()
    let member;
    try{
        member = await message.guild.members.fetch(user)
    }catch(err) {
        console.log(err)
    }
    
    let role = message.guild.roles.cache.find(r => r.name === 'Muted')
    
    if(!role) return message.channel.send('Please make a "Muted" role first.')
    
    member.roles.remove(role)
    
    let muteEmbed = new Discord.MessageEmbed()
    muteEmbed.setTitle('Unmuted!')
    muteEmbed.setColor('GREEN')
    muteEmbed.addField('Umuted', user, true)
    muteEmbed.addField('By:', message.author, true)
    muteEmbed.setTimestamp()
    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You are now unmuted')
    embed.setDescription(`Unmuted by ${message.author}`)
    embed.setTimestamp()
    message.channel.send(muteEmbed)
    
    try{
        user.send(embed)
    }catch (err) {
        if(err) {
            message.channel.send(err)
        }
    }
}

exports.help = {
    name: "unmute",
    description: "Unmutes a user.",
    usage: "/unmute <@user>",
    example: "/unmute @dumbo"
}

exports.conf = {
    aliases: ['mute off'],
    cooldown: 5
}