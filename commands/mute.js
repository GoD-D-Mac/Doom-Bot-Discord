const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(message.author.tag +' **You Don\'t have permission to use that command**');
    
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('You didn\'t mention anyone');
    
    let member;
    
    try{
        member = await message.guild.members.fetch(user);
    }catch(err) {
        member = null;
    }
    let rawTime = args[1];
    let time = ms(rawTime);
    
    if(!rawTime) return message.channel.send('You must specify a time!')
    let reason = message.content.split(`/mute ${user} ${rawTime} `).join(' ');
    
    if(!reason) return message.channel.send('Give a Reason for the mute')
    
    if(!member) return message.channel.send('Invalid user mentioned');
    
    let role = message.guild.roles.cache.find(r => r.name === 'Muted')
    if(!role) return message.channel.send('You need to add a "Muted" role for that command to run')
    
    let warn = new Discord.MessageEmbed()
    warn.setColor('RED')
    warn.setTitle("Muted")
    warn.addField("User:", user, true)
    warn.addField("By:", message.author, true)
    warn.addField("Reason:", reason)
    warn.addField('Time:', rawTime, true)
    message.channel.send(warn);

    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You were muted!')
    embed.addField('Reason:', reason);
    embed.addField('Time:', rawTime, true)
    
    member.roles.add(role);
    
    setTimeout(async() => {
        member.roles.remove(role);
    }, time);
    
    try{
        user.send(embed)
        message.channel.send(`**${user}** has been __MUTED__ by **${message.author}** **${rawTime}**!`);
    }catch(err) {
        console.log(err)
    }
}