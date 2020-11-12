exports.run = async(client, message, args) => {
    if(message.author.id !== '752469768845656065') return message.channel.send('You can\'t use that command')
    message.delete({timestamp: 100})
    let msg = await message.channel.send('Restarting')
    let msg1 = await msg.edit('Restarting.')
    let msg2 = await msg1.edit('Restarting. .')
    let msg3 = await msg2.edit('Restarting. . .').then(m => m.delete({timeout: 750}))
    process.exit()
}

exports.help = {
    name: "restart",
    description: "Restarts the bot.",
    usage: "/restart",
    example: "/restart"
}

exports.conf = {
    aliases: ['off', 'reset'],
    cooldown: 5
}