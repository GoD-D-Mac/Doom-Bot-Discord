const Discord = require('discord.js');
const figlet = require('figlet')
exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send('Please provide some text to convert');
    
        msg = args.join(" ");
        
        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            let embed = new Discord.MessageEmbed()
            embed.setDescription('```' + data + '```')
            embed.setTimestamp()
            embed.setColor('RANDOM')
            message.channel.send(embed)
        })
}

exports.help = {
    name: "figlet",
    description: "Converts a message to ascii.",
    usage: "/figlet",
    example: "/figlet <message>"
}

exports.conf = {
    aliases: ['f', 'ascii', 'a'],
    cooldown: 2
}