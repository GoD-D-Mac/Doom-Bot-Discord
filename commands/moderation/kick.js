const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(message.author.tag +' **You Don\'t have permission to use that command**');
    
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('You didn\'t mention anyone');
    
    let member;
    
    try{
        member = await message.guild.members.fetch(user);
    }catch(err) {
        member = null;
    }
    
    let reason = args.splice(1).join(' ');
    
    if(!reason) return message.channel.send('Give a Reason for the kick!')
    
    if(!member) return message.channel.send('Invalid user mentioned');
    
    let warn = new Discord.MessageEmbed()
    warn.setColor('RED')
    warn.setTitle("Kicked")
    warn.addField("User:", user, true)
    warn.addField("By:", message.author, true)
    warn.addField("Reason:", reason)
    message.channel.send(warn);

    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You were kicked!')
    embed.setDescription(reason);
    
    try{
        user.send(embed)
        message.channel.send(`**${user}** has been __KICKED__ by **${message.author}**!`);
    }catch(err) {
        console.log(err)
    }
    
    member.kick(reason)
}

exports.help = {
    name: "kick",
    description: "kicks a user.",
    usage: "/kick <@user> <reseaon>",
    example: "/kick @dumbo he is dumb"
}

exports.conf = {
    aliases: ['kick'],
    cooldown: 10
}