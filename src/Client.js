const Discord = require('discord.js');

class Client {

  constructor(client) {
    if(!client instanceof Discord.Client) throw new Error('The argument must be a discord client')
    this.client = client;
  }

  constructor(){
    throw new Error('You must enter a discord client in argument.')
  }

}

module.exports = Client;
