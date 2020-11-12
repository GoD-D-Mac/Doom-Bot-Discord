exports.run = async(client, message, args) => {
    let msg = args.join(' ')
    if(!msg) return message.channel.send('Please provide a message to say')
    message.channel.send(msg)
}

exports.help = {
    name: "say",
    description: "says a message you provided.",
    usage: "/say <message>",
    example: "/say Hello"
}

exports.conf = {
    aliases: ['tell'],
    cooldown: 2
}