const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    let user
    if(message.mentions.users.first()) {
        user = message.mentions.users.first()
    } else {
        user = message.author
    }
    const avatar = user.displayAvatarURL({size: 4096, dynamic: true})
    
    const embed = new Discord.MessageEmbed()
    embed.setTitle(`${user.username}\'s Avatar`)
    embed.setImage(avatar)
    embed.setColor('PURPLE')
    embed.setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed)
}

exports.help = {
    name: "avatar",
    description: "Shows the avatar of a user.",
    usage: "/avatar",
    example: "/avatar or /avatar <@user>"
}

exports.conf = {
    aliases: ['pfp', 'av', 'profile'],
    cooldown: 5
}