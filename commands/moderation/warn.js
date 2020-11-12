const Discord = require('discord.js');
const client = new Discord.Client();

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
    
    let reason = args.splice(1).join(' ');
    
    if(!reason) return message.channel.send('Give a Reason for the warn')
    
    if(!member) return message.channel.send('Invalid user mentioned');
    
    let warn = new Discord.MessageEmbed()
    warn.setColor('RED')
    warn.setTitle("Warned")
    warn.addField("User:", user, true)
    warn.addField("By:", message.author, true)
    warn.addField("Reason:", reason)
    message.channel.send(warn);

    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You were warned!')
    embed.setDescription(reason);
    
    try{
        user.send(embed)
        message.channel.send(`**${user}** has been __WARNED__ by **${message.author}**!`);
    }catch(err) {
        console.log(err)
    }
}

exports.help = {
    name: "warn",
    description: "Warns a user.",
    usage: "/warn <@user> <reason>",
    example: "/warn @dumbo he is dumb"
}

exports.conf = {
    aliases: [],
    cooldown: 10
}