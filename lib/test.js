const config = require('../../config');

const DiscordAPI = new (require('./lib'))({
  token: config.discord.token,
  debug: true,
});

module.exports = DiscordAPI;
