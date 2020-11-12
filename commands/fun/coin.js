const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    const heads = ['h', 'heads', 'head']
    const tales = ['t', 'tales', 'tale']
    
    const flip = ['Heads', 'Tales']
    
    const flipped = flip[Math.floor(Math.random() * flip.length)]
    
    const filter = x => {
        return (x.author.id === message.author.id)
    }
    function emoji(id) {
        return client.emojis.cache.get(id).toString()
    }
    
    const msg = await message.channel.send('Flipping! Answer heads or tales!')
    const choose = await message.channel.awaitMessages(filter, {max: 1, time: 10000})
    
    if(!choose.size) return message.channel.send('Time ended. You didn\'t answer.')
    
    const choice = choose.first().content.toLowerCase()
    
    if(heads.includes(choice) || tales.includes(choice)) return message.channel.send(`Flipped ${emoji('775912340079116308')} ${flipped}`)
    if(!heads.includes(choice) || !tales.includes(choice)) return message.channel.send('Just answer (heads, head, h or tales, tale, t)')
}

exports.help = {
    name: "coin",
    description: "Flips a coin.",
    usage: "/coin",
    example: "/coin"
}

exports.conf = {
    aliases: ['cf', 'coin flip'],
    cooldown: 2
}