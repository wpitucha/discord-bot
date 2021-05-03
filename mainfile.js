const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = '>'

client.once('ready', () => {
    console.log('have fun')
})

client.on('message', message => {
    let name = message.author.username
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split('/ +/')
    const command = args.shift().toLowerCase()

    if(command === 'ping') {
        message.channel.send('pong! Cholera, znowu wygrałeś')
    } else if (command == 'bocik') {
        message.channel.send('to ja!')
    } else if (command == 'mynick')
        message.channel.send(name)
    else if (command == '2137')
        message.channel.send('amen')
})

