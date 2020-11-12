const Discord = require('discord.js')
var { post } = require('node-superfetch')

exports.run = async(client, message, args) => {
    if(message.author.id !== '752469768845656065') return message.channel.send('Don\'t even try to use that command')
    const embed = new Discord.MessageEmbed()
    embed.addField('Input:', '```js\n' + args.join(" ") + '```' )
    
    try{
        let code = args.join(' ')
        if(!code) return message.channel.send('Please provide the code.')
        if(code.includes('SECRET') || code.includes('token') || code.includes('process.env')) {
            evaled = 'Don\'t do that! what the heck are you thinking'
        } else {
            evaled = eval(code)
        }
        if(typeof code !== 'string') evaled = require('util').inspect(evaled, {depth: 0})
        
        let output = clean(evaled)
        if(output.length > 1024) {
            const {body} = await post('https://hastebin.com/documents').send(output)
            embed.addField('Output:', `https://hastebin.com/${body.key}.js`).setColor('PURPLE')
        } else {
            embed.addField('Output', '```js\n' + output + '```').setColor('PURPLE')
        }
    } catch (error) {
        let err = clean(error)
        if(err.length > 1024) {
            const {body} = await post('https://hastebin.com/documents').send(err)
            embed.addField('Output:', `https://hastebin.com/${body.key}.js`).setColor('RED')
        } else {
            embed.addField('Output', '\`\`\`js\n' + err + '\`\`\`').setColor('RED')
        }
    }
    
    function clean(string) {
        if(typeof text === 'string') {
            return string.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, '@' + string.fromCharCode(8203))
        } else {
            return string
        }
    }
    message.channel.send(embed)
}

exports.help = {
    name: "eval",
    description: "Evaluates messages.",
    usage: "/eval <message>",
    example: "/eval 1+1"
}

exports.conf = {
    aliases: ['evaluate'],
    cooldown: 5
}