const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment')

exports.run = async(client, message, args) => {
    
    let user = message.mentions.users.first() || message.author;
    
    let x = Date.now() - user.createdAt;
    
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt;
    let created = Math.floor(x / 86400000);
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(user);
    const memberRole = message.guild.members.cache.get(user.id)
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
    let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = user.presence.status;
    let avatar = user.avatarURL({size: 2048});
    let roles = member.roles.cache
    .map((role) => role.toString())
    
    const embed = new Discord.MessageEmbed()
    embed.setAuthor(user.tag, avatar)
    embed.setThumbnail(avatar)
    embed.setTimestamp()
    embed.setColor('ORANGE')
    embed.addField("ID", user.id, true)
    embed.addField("Bot?", user.bot, true)
    embed.addField("Nickname", nickname, true)
    embed.addField("Created Account Date", `${createdate} \nsince ${created} day(s) ago`, true)
    embed.addField("Joined Guild Date", `${joindate} \nsince ${joined} day(s) ago`, true)
    embed.addField("Roles", roles, true)
    embed.addField("Role Count", memberRole.roles.cache.size -1, true)
    
    try{
        message.channel.send(embed)
    }catch(err) {
        return message.channel.send(`\`\`\`${err}\`\`\``)
    }
}

exports.help = {
    name: "user info",
    description: "Shows the information of a user.",
    usage: "/user info <@user>",
    example: "/user info @dumbo"
}

exports.conf = {
    aliases: ['ui', 'whois', 'userinfo'],
    cooldown: 10
}