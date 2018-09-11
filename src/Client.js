const Discord = require('discord.js');

class Client {

  constructor(client) {
    this.client = client;
    if(!this.client instanceof Discord.Client) throw new Error('The argument must be a discord client')
  }

}

module.exports = Client;
