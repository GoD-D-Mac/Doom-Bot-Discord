const Discord = require('discord.js')
const count = require('../count.json')

exports.run = async(client, message, args) => {
    if(!count[message.author.id]) {
        count[message.author.id] = {
            battle: 0,
            locations: 0,
            floor: 0,
            raid: 0,
            total: 0
        }
    }
    let user = message.mentions.users.first() || message.author
    let countBt = count[user.id].battle
    let countFloor = count[user.id].floor
    let countLocations = count[user.id].locations
    let countRaid = count[user.id].raid
    let countTotal = count[user.id].total
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Anigame Commands!')
    embed.setDescription(`${user.username}\'s runned anigame commands!`)
    embed.addField('Battles', countBt, true)
    embed.addField('Floors', countFloor, true)
    embed.addField('Locations', countLocations, true)
    embed.addField('Raids', countRaid, true)
    embed.addField('Total', countTotal, true)
    embed.setFooter('Its not perfect but it works')
    embed.setColor('GOLD')
    message.channel.send(embed);
}