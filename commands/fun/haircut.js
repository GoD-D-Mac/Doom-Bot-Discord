exports.run = async(client, message, args) => {
    const responses = ['I like my new haircut', 'My new haircut looks dope', 'Damn I love my hair', 'Want a new haurcut too? its just $50', 'OMG my haircut is so goood!']
    const response = responses[Math.floor(Math.random() * responses.length)]
    
    message.channel.send(response)
}

exports.help = {
    name: "haircut",
    description: "Talks about the haircut of the bot.",
    usage: "/haircut",
    example: "/haircut"
}

exports.conf = {
    aliases: [],
    cooldown: 2
}