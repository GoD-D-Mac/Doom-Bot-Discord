const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('../../config.json')

exports.run = async(client, message, args) => {
    let avatar = message.author.avatarURL({size: 2048});
    const embed = new Discord.MessageEmbed();
    embed.setTitle('**List Of the Commands**');
    embed.setDescription('list of the available commands of the bot if its not working properly/unable to run ping the developer of the bot.')
    embed.setColor('WHITE')
    embed.addField(`:dart: Fun`, '`List of fun commands. /help fun`')
    embed.addField(`:gear: Moderation`, '`List of moderation commands. /help moderation`')
    embed.addField(':robot: Miscellaneous', '`List of miscellaneous commands. /help misc`')
    embed.addField(':lock: Developer', '`List of developer commands. /help developer`')
    embed.setAuthor(message.author.username, avatar)
    embed.setThumbnail(avatar)
    embed.setFooter(`Requested by ${message.author.username}`)
    embed.setTimestamp()
    
    if(!args[0]) {
        message.channel.send(embed)
    } else if(args[0].toLowerCase() === 'help') {
        const helpEmbed = new Discord.MessageEmbed()
        helpEmbed.setTitle('HELP')
        helpEmbed.setDescription('It will send an embed with all of the available commands of the bot, when /help <command> is typed it will send more information.')
        helpEmbed.setFooter('/help, /help <command>')
        helpEmbed.setColor('GREEN')
        message.channel.send(helpEmbed);
    } else if(args[0].toLowerCase() === 'userinfo') {
        const userinfoEmbed = new Discord.MessageEmbed()
        userinfoEmbed.setTitle('USERINFO')
        userinfoEmbed.setDescription('It will send an embed with the information of the user in the server or the author\'s information if there is no user mentioned')
        userinfoEmbed.setFooter('/userinfo, /userinfo <@user>')
        userinfoEmbed.setColor('GREEN')
        message.channel.send(userinfoEmbed)
    } else if(args[0].toLowerCase() === 'announce') {
        const announceEmbed = new Discord.MessageEmbed()
        announceEmbed.setTitle('ANNOUNCE')
        announceEmbed.setDescription('It will send an embed with the announcement that has been given by the author')
        announceEmbed.setFooter('/announce <#channel> && <color> && <title> && <announcement>')
        announceEmbed.setColor('GREEN')
        message.channel.send(announceEmbed)
    } else if(args[0].toLowerCase() === 'warn') {
        const warnEmbed = new Discord.MessageEmbed()
        warnEmbed.setTitle('WARN')
        warnEmbed.setDescription('It will warn a mentioned user and DM\`s the mentioned user about the warn and the reason')
        warnEmbed.setFooter('/warn <@user> <reason>')
        warnEmbed.setColor('GREEN');
        message.channel.send(warnEmbed)
    } else if(args[0].toLowerCase() === 'tempmute') {
        const muteEmbed = new Discord.MessageEmbed()
        muteEmbed.setTitle('TEMPMUTE')
        muteEmbed.setDescription('It will mute a mentioned user temporary with the time that has been given and sends a DM to the muted user that they were muted and the reason of the mute')
        muteEmbed.setFooter('/mute <@user> <time s, m, h, d, w> <reason>')
        muteEmbed.setColor('GREEN')
        message.channel.send(muteEmbed)
    } else if(args[0].toLowerCase() === 'ban') {
        const banEmbed = new Discord.MessageEmbed()
        banEmbed.setTitle('BAN')
        banEmbed.setDescription('It will ban a mentioned user from the server and will "TRY" to DM the banned user')
        banEmbed.setFooter('/ban <@user> <reason>')
        banEmbed.setColor('GREEN')
        message.channel.send(banEmbed)
    } else if(args[0].toLowerCase() === 'kick') {
        const kickEmbed = new Discord.MessageEmbed()
        kickEmbed.setTitle('KICK')
        kickEmbed.setDescription('It will kick a mentioned user fromv the server and will "TRY" to DM the kicked user')
        kickEmbed.setFooter('/kick <@user> <reason>')
        kickEmbed.setColor('GREEN')
        message.channel.send(kickEmbed)
    } else if(args[0].toLowerCase() === 'ping') {
        const pingEmbed = new Discord.MessageEmbed()
        pingEmbed.setTitle('PING')
        pingEmbed.setDescription('Why did you even bothered doing this? ok ok.\nIt will send a message that shows the ping of the bot')
        pingEmbed.setFooter('/ping')
        pingEmbed.setColor('GREEN')
        message.channel.send(pingEmbed)
    } else if(args[0].toLowerCase() === 'clear') {
        const clearEmbed = new Discord.MessageEmbed()
        clearEmbed.setTitle('CLEAR')
        clearEmbed.setDescription('It will delete a messages of a certain amount that has been given')
        clearEmbed.setFooter('/clear <amount>')
        clearEmbed.setColor('GREEN')
        message.channel.send(clearEmbed)
    } else if(args[0].toLowerCase() === 'calc'){
        const calcEmbed = new Discord.MessageEmbed();
        calcEmbed.setTitle('CALCULATOR')
        calcEmbed.setDescription('Answers a given equation by the author equation are number! if it isn\'t a number it will send an error message')
        calcEmbed.setFooter('/calc <firstNumber> <+, -, ×, ÷> <secondNumber>')
        calcEmbed.setColor('GREEN')
        message.channel.send(calcEmbed)
    } else if(args[0].toLowerCase() === 'avatar'){
        const avatarEmbed = new Discord.MessageEmbed();
        avatarEmbed.setTitle('AVATAR')
        avatarEmbed.setDescription('It will send the author\'s avatar or the mentioned avatar thats all')
        avatarEmbed.setColor('GREEN')
        message.channel.send(avatarEmbed)
    } else if(args[0].toLowerCase() === 'figlet'){
        const figletEmbed = new Discord.MessageEmbed();
        figletEmbed.setTitle('FIGLET')
        figletEmbed.setDescription('It will convenrt a text to symbols that looks like the original text typed!')
        figletEmbed.setFooter('/figlet <text>')
        figletEmbed.setColor('GREEN')
        message.channel.send(figletEmbed)
    } else if(args[0].toLowerCase() === 'meme') {
        const memeEmbed = new Discord.MessageEmbed()
        memeEmbed.setTitle('MEME')
        memeEmbed.setDescription('Sends memes from a random subreddit of dankmeme, meme or memes and tries to make you laugh')
        memeEmbed.setColor('GREEN')
        memeEmbed.setFooter('/meme')
        message.channel.send(memeEmbed)
    } else if(args[0].toLowerCase() === 'count'){
        const countEmbed = new Discord.MessageEmbed()
        countEmbed.setTitle('COUNT')
        countEmbed.setDescription('Sends the number of anigame commands used by the author or the mentioned user.')
        countEmbed.setFooter('/count or /count <@user>')
        countEmbed.setColor('GREEN')
        message.channel.send(countEmbed)
    } else if(args[0].toLowerCase() === 'snipe'){
        const snipeEmbed = new Discord.MessageEmbed()
        snipeEmbed.setTitle('SNIPE')
        snipeEmbed.setDescription('It will send the recently deleted message of a member and the person who wrote the message.')
        snipeEmbed.setFooter('/snipe')
        snipeEmbed.setColor('GREEN')
        message.channel.send(snipeEmbed)
    } else if(args[0].toLowerCase() === 'setnick'){
        const setnickEmbed = new Discord.MessageEmbed()
        setnickEmbed.setTitle('SETNICK')
        setnickEmbed.setDescription('It will change the nickname or add a nickname to a mentioned user.')
        setnickEmbed.setFooter('/setnick <@user> <nickname>')
        setnickEmbed.setColor('GREEN')
        message.channel.send(setnickEmbed)
    } else if(args[0].toLowerCase() === 'mute'){
        const mute2Embed = new Discord.MessageEmbed()
        mute2Embed.setTitle('MUTE')
        mute2Embed.setDescription('It will mute a user.')
        mute2Embed.setFooter('/mute <@user> <reason>')
        mute2Embed.setColor('GREEN')
        message.channel.send(mute2Embed)
    } else if(args[0].toLowerCase() === 'unmute'){
        const unmuteEmbed = new Discord.MessageEmbed()
        unmuteEmbed.setTitle('UNMUTE')
        unmuteEmbed.setDescription('It will unmute a muted user if not muted it will stop.')
        unmuteEmbed.setColor('GREEN')
        unmuteEmbed.setFooter('/unmute <@user>')
        message.channel.send(unmuteEmbed)
    } else if(args[0].toLowerCase() === 'fun'){
        const funEmbed = new Discord.MessageEmbed()
        funEmbed.setTitle(':dart: Fun!')
        funEmbed.setDescription('List of fun commands available.')
        funEmbed.addField('Commands', '`say, coin, figlet, meme, haircut.`')
        funEmbed.setAuthor(message.author.username, avatar)
        funEmbed.setThumbnail(avatar)
        funEmbed.setColor('YELLOW')
        message.channel.send(funEmbed)
    } else if(args[0].toLowerCase() === 'moderation'){
        const modEmbed = new Discord.MessageEmbed()
        modEmbed.setTitle(':gear: Moderation')
        modEmbed.setDescription('List of moderation commands available.')
        modEmbed.addField('Commands', '`announce, clear, setnickname, tempmute, mute, unmute, warn, kick, ban`')
        modEmbed.setColor('RED')
        message.channel.send(modEmbed)
    } else if(args[0].toLowerCase() === 'developer'){
        if(!client.config.developers.includes(message.author.id)) return message.channel.send('You must be a developer to see the developer commands.')
        const devEmbed = new Discord.MessageEmbed()
        devEmbed.setTitle(':lock: Developers')
        devEmbed.setDescription('List of developer commands available.')
        devEmbed.addField('Commands', '`restart, eval, exec`')
        devEmbed.setColor('GOLD')
        message.channel.send(devEmbed)
    } else if(args[0].toLowerCase() === 'haircut'){
        const hCEmbed = new Discord.MessageEmbed()
        hCEmbed.setTitle('HAIRCUT')
        hCEmbed.setDescription('Sends a message about the bots haircut')
        hCEmbed.setFooter('/haircut')
        hCEmbed.setColor('GREEN')
    } else if(args[0].toLowerCase() === 'restart'){
        if(!client.config.developers.includes(message.author.id)) return message.channel.send('You must be a developer to see the command.')
        const restartEmbed = new Discord.MessageEmbed()
        restartEmbed.setTitle('RESTART')
        restartEmbed.setDescription('Restarts the bot.')
        restartEmbed.setFooter('/restart')
        restartEmbed.setColor('RED')
        message.channel.send(restartEmbed)
    } else if(args[0].toLowerCase() === 'eval'){
        if(!client.config.developers.includes(message.author.id)) return message.channel.send('You must be a developer to see the command.')
        const evalEmbed = new Discord.MessageEmbed()
        evalEmbed.setTitle('EVALUATE')
        evalEmbed.setDescription('Evaluates a message.')
        evalEmbed.setFooter('/eval <code>')
        evalEmbed.setColor('RED')
        message.channel.send(evalEmbed)
    } else if(args[0].toLowerCase() === 'exec'){
        if(!client.config.developers.includes(message.author.id)) return message.channel.send('You must be a developer to see the command.')
        const execEmbed = new Discord.MessageEmbed()
        execEmbed.setTitle('EXECUTE')
        execEmbed.setDescription('Executes a command.')
        execEmbed.setFooter('/exec <code>')
        execEmbed.setColor('RED')
        message.channel.send(execEmbed)
    } else if(args[0].toLowerCase() === 'misc'){
        const miscEmbed = new Discord.MessageEmbed()
        miscEmbed.setTitle(':robot: Miscellaneous')
        miscEmbed.setDescription('List of miscellaneous commands available.')
        miscEmbed.addField('Commands', '`calc, ping, help, avatar, userinfo`')
        miscEmbed.setColor('BLUE')
        message.channel.send(miscEmbed)
    } else {
        message.channel.send(embed)
    }
}

exports.help = {
    name: "help",
    description: "helps a user.",
    usage: "/help or /help <command>",
    example: "/help say"
}

exports.conf = {
    aliases: ['commands', 'list'],
    cooldown: 2
}