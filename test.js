const Discord = require('discord.js');
const client = new Discord.Client();

const Codes = require('./src/index');
const Client = new Codes.Client(client);

Client.onReady(() => {
    console.log('Ready!')
})

//client.login()