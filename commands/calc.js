const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send('Please provide a First number')
    if(!args[1]) return message.channel.send('Please provide the right syntax')
    if(!args[2]) return message.channel.send('Please provide a Second Number')
    const prefix = '/'
	const Question = args.join(' ')
    let firstNumber = Number(args[0])
    let secondNumber = Number(args[2])
    if(!firstNumber == Number) return message.channel.send(`${args[0]} is not a number`);
    if(!secondNumber == Number) return message.channel.send(`${args[2]} is not a number`);
    
    let plusEmbed = new Discord.MessageEmbed();
    plusEmbed.setTitle('Calculating')
    plusEmbed.addField(`Question:`, `\`\`${Question}\`\``, false)
    plusEmbed.addField('Answer', `${firstNumber + secondNumber}`, false)
    plusEmbed.setColor('BLUE')
    
    let minusEmbed = new Discord.MessageEmbed();
    minusEmbed.setTitle('Calculating')
    minusEmbed.addField(`Question:`, `\`\`${Question}\`\``, false)
    minusEmbed.addField('Answer', `${firstNumber - secondNumber}`, false)
    minusEmbed.setColor('BLUE')
    
    let divideEmbed = new Discord.MessageEmbed();
    divideEmbed.setTitle('Calculating')
    divideEmbed.addField(`Question:`, `\`\`${Question}\`\``, false)
    divideEmbed.addField('Answer', `${firstNumber / secondNumber}`, false)
    divideEmbed.setColor('BLUE')
    
    let multiplyEmbed = new Discord.MessageEmbed();
    multiplyEmbed.setTitle('Calculating')
    multiplyEmbed.addField(`Question:`, `\`\`${Question}\`\``, false)
    multiplyEmbed.addField('Answer', `${firstNumber * secondNumber}`, false)
    multiplyEmbed.setColor('BLUE')
    
    if(args[1] === '+') {
        message.channel.send(plusEmbed)
    } else if(args[1] === '-') {
        message.channel.send(minusEmbed)
    } else if(args[1] === '÷') {
        message.channel.send(divideEmbed)
    } else if(args[1] === '×') {
        message.channel.send(multiplyEmbed)
    } else {
    let errorEmbed = new Discord.MessageEmbed()
    errorEmbed.setTitle('SYNTAX');
    errorEmbed.setDescription('/calc <firstNumber> <+, -, ×, ÷> <secondNumber>')
    errorEmbed.setColor('RED')
    message.channel.send(errorEmbed)
    }
}