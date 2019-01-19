const Discord = require('discord.js');

class Client {

  constructor(client) {
    if(!(client instanceof Discord.Client)) throw new Error("The argument must be a Discord Client!")
    this.client = client;
  }

  onReady(handler) {
    this.client.on('ready', handler);
  }

  newCommand(options = {}) {
    let o = options;
    if(!o.prefix) console.error("You must provide the prefix!");
  }

}

module.exports = Client;
