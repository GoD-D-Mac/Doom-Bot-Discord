const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use that command.')
    let user = message.mentions.users.first()
    if(!user) return message.channel.send('Please mention a user.')
    
    let member;
    
    try{
        member = await message.guild.members.fetch(user);
    }catch(err) {
        member = null;
    }
    if(!member) return message.channel.send('Invalid user mentioned')
    
    let role = message.guild.roles.cache.find(r => r.name === 'Muted')
    if(!role) return message.channel.send('You need to add a "Muted" role for that command to run(It has to be a higher role than other member roles and not able to send messages)')
    let reasoncheck = args[1]
    let reason = message.content.split(`/mute ${user} `)
    if(!reasoncheck) return message.channel.send('Please specify a reason')
    member.roles.add(role)
    
    let warn = new Discord.MessageEmbed()
    warn.setColor('RED')
    warn.setTitle("Muted")
    warn.addField("User:", user, true)
    warn.addField("By:", message.author, true)
    warn.addField("Reason:", reason)
    message.channel.send(warn);

    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You were muted!')
    embed.addField('Reason:', reason);
    
    try {
        user.send(embed)
    }catch(err) {
        message.channel.send(err)
    }
}

exports.help = {
    name: "mute",
    description: "Mutes a user.",
    usage: "/mute <@user> <reseaon>",
    example: "/mute @dumbo He is dumb"
}

exports.conf = {
    aliases: ['stfu', 'mute on'],
    cooldown: 10
}