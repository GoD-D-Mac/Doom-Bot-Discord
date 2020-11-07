const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const figlet = require('figlet');
const process = require('child_process');
const fs = require('fs');
const randomPuppy = require('random-puppy')
const generalChannel = [
        '767055445071495201', //General
        ]
const count = require('./count.json')

const anigameChannels = [
    '767065255058604072', //anigame
    '767267042012954655', //anigame-battle
    '767266194968936449', //raid-channel
    ]

client.snipes = new Map()

let readyLog = '774516121096683521'
client.on('ready', async() => {
    console.log('Ready :D');
    client.user.setActivity('you sleep | /help', { type: 'WATCHING'})
    client.user.setStatus('idle')
    client.channels.cache.get(readyLog).send('Back online!').then(m => m.delete({timeout: 3000}))
});

client.on('message', async(message) => {
    if(!anigameChannels.includes(message.channel.id)) return;
    if(!count[message.author.id]) {
        count[message.author.id] = {
            battle: 0,
            locations: 0,
            floor: 0,
            raid: 0,
            total: 0
        }
    }
    if(message.content.startsWith('.bt')) {
        count[message.author.id] = {
            battle: count[message.author.id].battle + 1,
            locations: count[message.author.id].locations,
            floor: count[message.author.id].floor,
            raid: count[message.author.id].raid,
            total: count[message.author.id].total
        }
        fs.writeFile('./count.json', JSON.stringify(count, null, 2), err => {
            if(err) console.log(err);
        })
    }
    if(message.content.startsWith('.loc')) {
        count[message.author.id] = {
            battle: count[message.author.id].battle,
            locations: count[message.author.id].locations + 1,
            floor: count[message.author.id].floor,
            raid: count[message.author.id].raid,
            total: count[message.author.id].total
        }
        fs.writeFile('./count.json', JSON.stringify(count, null, 2), err => {
            if(err) console.log(err);
        })
    }
    if(message.content.startsWith('.fl')) {
        count[message.author.id] = {
            battle: count[message.author.id].battle,
            locations: count[message.author.id].locations,
            floor: count[message.author.id].floor + 1,
            raid: count[message.author.id].raid,
            total: count[message.author.id].total
        }
        fs.writeFile('./count.json', JSON.stringify(count, null, 2), err => {
            if(err) console.log(err);
        })
    }
    if(message.content.startsWith('.rd')) {
        count[message.author.id] = {
            battle: count[message.author.id].battle,
            locations: count[message.author.id].locations,
            floor: count[message.author.id].floor,
            raid: count[message.author.id].raid + 1,
            total: count[message.author.id].total
        }
        fs.writeFile('./count.json', JSON.stringify(count, null, 2), err => {
            if(err) console.log(err);
        })
    }
    count[message.author.id] = {
        battle: count[message.author.id].battle,
        locations: count[message.author.id].locations,
        floor: count[message.author.id].floor,
        raid: count[message.author.id].raid,
        total: count[message.author.id].battle + count[message.author.id].locations + count[message.author.id].floor + count[message.author.id].raid
    }
    fs.writeFile('./count.json', JSON.stringify(count, null, 2), err => {
            if(err) console.log(err);
        })
})

client.on('message', async(msg) => {
    const args = msg.content.split(' ');
    
    if(msg.content.startsWith('hm')) {
        await msg.delete()
    } else if(msg.content.startsWith('Hm')) {
        await msg.delete()
    } else if(msg.content.startsWith('HM')) {
        await msg.delete()
    }
    if(msg.author.bot) return;
    
    const prefix = '/'
    if(!msg.content.toLowerCase().startsWith(prefix)) return;
    const cmd = args.shift().slice(prefix.length).toLowerCase()
    
    try {
        const file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        console.warn(err);
    }
});

client.on('message', async(message) => {
    if(message.content.startsWith('.')) {
        const aniEmbed = new Discord.MessageEmbed()
        aniEmbed.setTitle('You can\'t do Anigame commands here!')
        aniEmbed.setDescription('You can only play anigame in <#767065255058604072>, <#767267042012954655> and <#767266194968936449>!')
        aniEmbed.setColor('RED')
        if(generalChannel.includes(message.channel.id)) {
            return message.channel.send(aniEmbed)
        }
    }
})

let memberlog = '767055445071495201'

client.on('guildMemberAdd', member => {
    if(member.guild.id !== '767055445071495198') return;
    client.channels.cache.get(memberlog).send(`Welcome ${member.user.tag}!`)
})

client.on('messageDelete', async(message, channel) => {
    client.snipes.set(message.author.id, {
        content: message.content,
        author: message.author,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

client.login('NzcwMjk4NTgyNDA1ODczNzE0.X5bidQ.1MAzDIu4YkbMnnUJOeGf-pai5cY');