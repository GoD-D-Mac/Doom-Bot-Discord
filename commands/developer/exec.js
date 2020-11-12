const Discord = require('discord.js');
const process = require("child_process");

exports.run = async (client, message, args) => {
    if (message.author.id !== "752469768845656065") return message.channel.send('You can\'t use this command');
    if(!args) return message.channel.send('Please provide a command')
    
    let msg =  await message.channel.send("Please wait")
    let msg1 = await msg.edit('Please wait.')
    let msg2 = await msg1.edit('Please wait. .')
    let msg3 = await msg2.edit('Please wait. . .').then(m => m.delete({timeout: 3000}))
    
    process.exec(args.join(" "), (error, stdout) => {
        let response = (error || stdout || 'Coundn\'t find a message to send.');
        
        let embed = new Discord.MessageEmbed()
        embed.addField(`Input`, `\`\`\`js\n${args.join(" ")}\`\`\``)
        embed.addField(`Output`, `\`\`\`js\n${response} \`\`\``)
        embed.setColor('BLUE')
        message.channel.send(embed).catch(err => message.channel.send(err));
    })
    
    return;
}

exports.help = {
    name: "exec",
    description: "Executes a message.",
    usage: "/exec <message>",
    example: "/exec echo dumbo is dumb"
}

exports.conf = {
    aliases: ['execute', 'shell'],
    cooldown: 5
}