const randomPuppy = require('random-puppy')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
        let description = ['I have a meme for you.', 'Here is the meme!', 'Do you like memes?', 'What a nice meme', 'HAHAHA this meme is good', 'Noice memes', 'Bro I got you', 'I got this meme for you.', 'Need memes? Here it is', 'Nice meme']
        const randomDes = description[Math.floor(Math.random() * description.length)]
        
        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setImage(img)
        embed.setTitle(`From r/${random}`)
        embed.setDescription(randomDes)
        embed.setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed);
}