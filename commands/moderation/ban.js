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
    
    if(!reason) return message.channel.send('Give a Reason for the ban!')
    
    if(member){
        if(member.hasPermission('ADMINISTRATOR')) return message.channel.send('You can\'t ban this user!')
    }
    
    let warn = new Discord.MessageEmbed()
    warn.setColor('RED')
    warn.setTitle("Banned")
    warn.addField("User:", user, true)
    warn.addField("By:", message.author, true)
    warn.addField("Reason:", reason)
    message.channel.send(warn);

    let embed = new Discord.MessageEmbed()
    embed.setColor('RED')
    embed.setTitle('You were Banned!')
    embed.setDescription(reason);
    
    try{
        await user.send(embed)
        message.channel.send(`**${user}** has been __BANNED__ by **${message.author}**!`);
    }catch(err) {
        console.log(err)
    }
    
    message.guild.members.ban(user);
}

exports.help = {
    name: "ban",
    description: "Bans a user.",
    usage: "/ban <@user> <reseaon>",
    example: "/ban @dumbo he is dumb"
}

exports.conf = {
    aliases: ['prohibit'],
    cooldown: 10
}