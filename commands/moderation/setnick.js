const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission(["MANAGE_NICKNAMES"])) {
    return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
  }
  
  let user = message.mentions.users.first();
  if (!user) return message.channel.send({embed: {color: "RED", description: "You need to mention the user!"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "You need to input the nickname!"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}))
  return message.channel.send({embed: {color: "GREEN", description: `Successfully changed **${user.tag}** nickname to **${nick}**`}});
}

exports.help = {
    name: "setnickname",
    description: "Changes the nickname of a user.",
    usage: "/setnickname <@user> <nickname>",
    example: "/setnickname @dumbo Dumbest"
}

exports.conf = {
    aliases: ['setnick', 'nick', 'name'],
    cooldown: 2
}