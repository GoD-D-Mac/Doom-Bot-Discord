exports.run = async(client, msg, args) => {
    msg.channel.send(`Pong! \`\` ${client.ws.ping}ms\`\``);
};

exports.help = {
    name: "ping",
    description: "Shows the ping ot the bot.",
    usage: "/ping",
    example: "/ping"
}

exports.conf = {
    aliases: ['ms', 'pong'],
    cooldown: 0
}