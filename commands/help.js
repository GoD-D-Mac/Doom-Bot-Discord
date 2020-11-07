const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed();
    embed.setTitle('**List Of the Commands**');
    embed.setDescription('list of the available commands of the bot if its not working properly/unable to run ping the developer of the bot.')
    embed.addField('PING', 'sends the ping of the bot', true)
    embed.addField('CALC', 'claculates a given question', true)
    embed.addField('FIGLET', 'converts a message to symbols', true)
    embed.addField('MEME', 'sends a random meme', true)
    embed.addField('USERINFO', 'sends the info of a user or the author\'s info', true)
    embed.addField('AVATAR', 'sends the avatar of a mentioned user or the author', true)
    embed.addField('ANNOUNCE', 'sends an announcement', true)
    embed.addField('CLEAR', 'Deletes a message of a given nunber', true)
    embed.addField('WARN', 'warns a user', true)
    embed.addField('MUTE', 'mutes a user', true)
    embed.addField('KICK', 'kicks a user from the server', true)
    embed.addField('BAN', 'Bans a user from thr server', true)
    embed.setColor('PURPLE')
    embed.setFooter('Use /help <command> for more information.')
    
    if(args[0] === 'help') {
        const helpEmbed = new Discord.MessageEmbed()
        helpEmbed.setTitle('HELP')
        helpEmbed.setDescription('It will send an embed with all of the available commands of the bot, when /help <command> is typed it will send more information.')
        helpEmbed.setFooter('/help, /help <command>')
        helpEmbed.setColor('GREEN')
        message.channel.send(helpEmbed);
    } else if(!args[0]) { 
        message.channel.send(embed)
    } else if(args[0] === 'userinfo') {
        const userinfoEmbed = new Discord.MessageEmbed()
        userinfoEmbed.setTitle('USERINFO')
        userinfoEmbed.setDescription('It will send an embed with the information of the user in the server or the author\'s information if there is no user mentioned')
        userinfoEmbed.setFooter('/userinfo, /userinfo <@user>')
        userinfoEmbed.setColor('GREEN')
        message.channel.send(userinfoEmbed)
    } else if(args[0] === 'announce') {
        const announceEmbed = new Discord.MessageEmbed()
        announceEmbed.setTitle('ANNOUNCE')
        announceEmbed.setDescription('It will send an embed with the announcement that has been given by the author')
        announceEmbed.setFooter('/announce <#channel> <color> <announcement>')
        announceEmbed.setColor('GREEN')
        message.channel.send(announceEmbed)
    } else if(args[0] === 'warn') {
        const warnEmbed = new Discord.MessageEmbed()
        warnEmbed.setTitle('WARN')
        warnEmbed.setDescription('It will warn a mentioned user and DM\`s the mentioned user about the warn and the reason')
        warnEmbed.setFooter('/warn <@user> <reason>')
        warnEmbed.setColor('GREEN');
        message.channel.send(warnEmbed)
    } else if(args[0] === 'mute') {
        const muteEmbed = new Discord.MessageEmbed()
        muteEmbed.setTitle('MUTE')
        muteEmbed.setDescription('It will mute a mentioned user temporary with the time that has been given and sends a DM to the muted user that they were muted and the reason of the mute')
        muteEmbed.setFooter('/mute <@user> <time s, m, h, d, w> <reason>')
        muteEmbed.setColor('GREEN')
        message.channel.send(muteEmbed)
    } else if(args[0] === 'ban') {
        const banEmbed = new Discord.MessageEmbed()
        banEmbed.setTitle('BAN')
        banEmbed.setDescription('It will ban a mentioned user from the server and will "TRY" to DM the banned user')
        banEmbed.setFooter('/ban <@user> <reason>')
        banEmbed.setColor('GREEN')
        message.channel.send(banEmbed)
    } else if(args[0] === 'kick') {
        const kickEmbed = new Discord.MessageEmbed()
        kickEmbed.setTitle('KICK')
        kickEmbed.setDescription('It will kick a mentioned user fromv the server and will "TRY" to DM the kicked user')
        kickEmbed.setFooter('/kick <@user> <reason>')
        kickEmbed.setColor('GREEN')
        message.channel.send(kickEmbed)
    } else if(args[0] === 'ping') {
        const pingEmbed = new Discord.MessageEmbed()
        pingEmbed.setTitle('PING')
        pingEmbed.setDescription('Why did you even bothered doing this? ok ok.\nIt will send a message that shows the ping of the bot')
        pingEmbed.setFooter('/ping')
        pingEmbed.setColor('GREEN')
        message.channel.send(pingEmbed)
    } else if(args[0] === 'clear') {
        const clearEmbed = new Discord.MessageEmbed()
        clearEmbed.setTitle('CLEAR')
        clearEmbed.setDescription('It will delete a messages of a certain amount that has been given')
        clearEmbed.setFooter('/clear <amount>')
        clearEmbed.setColor('GREEN')
        message.channel.send(clearEmbed)
    } else if(args[0] === 'calc'){
        const calcEmbed = new Discord.MessageEmbed();
        calcEmbed.setTitle('CALCULATOR')
        calcEmbed.setDescription('Answers a given equation by the author equation are number! if it isn\'t a number it will send an error message')
        calcEmbed.setFooter('/calc <firstNumber> <+, -, ×, ÷> <secondNumber>')
        calcEmbed.setColor('GREEN')
        message.channel.send(calcEmbed)
    } else if(args[0] === 'avatar'){
        const avatarEmbed = new Discord.MessageEmbed();
        avatarEmbed.setTitle('AVATAR')
        avatarEmbed.setDescription('It will send the author\'s avatar or the mentioned avatar thats all')
        avatarEmbed.setColor('GREEN')
        message.channel.send(avatarEmbed)
    } else if(args[0] === 'figlet'){
        const figletEmbed = new Discord.MessageEmbed();
        figletEmbed.setTitle('FIGLET')
        figletEmbed.setDescription('It will convenrt a text to symbols that looks like the original text typed!')
        figletEmbed.setFooter('/figlet <text>')
        figletEmbed.setColor('GREEN')
        message.channel.send(figletEmbed)
    } else if(args[0] === 'meme') {
        const memeEmbed = new Discord.MessageEmbed()
        memeEmbed.setTitle('MEME')
        memeEmbed.setDescription('Sends memes from a random subreddit of dankmeme, meme or memes and tries to make you laugh')
        memeEmbed.setColor('GREEN')
        memeEmbed.setFooter('/meme')
        message.channel.send(memeEmbed)
    } else {
        const idfkEmbed = new Discord.MessageEmbed()
        idfkEmbed.setTitle(`${args[0].toUpperCase()}`)
        idfkEmbed.setDescription(`Sorry that is not a valid command. IDFK it`)
        idfkEmbed.setColor('RED')
        message.channel.send(idfkEmbed)
    }
}