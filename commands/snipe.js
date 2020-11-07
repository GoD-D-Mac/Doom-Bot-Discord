const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    const msg = client.snipes.get(message.author.id)
    if(!msg) return message.channel.send('Theres nothing to snipe')
    
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Sniped ' + msg.author.username)
    embed.setDescription(msg.content)
    if(msg.image) embed.setImage(msg.image)
    embed.setColor('LIME_GREEN')
    message.channel.send(embed)
}