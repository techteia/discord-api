const fetch = require('node-fetch');

function DiscordAPI(options) {
  this.token = options?.token;
  this.discordAPIBaseURL = options?.discordAPIBaseURL || 'https://discord.com/api';
  this.tokenType = options?.tokenType || 'Bot';
  this.debug = options?.debug || false;
}

DiscordAPI.prototype.readGuildWebhooks = async function(guildId) {
  if (this.debug) console.debug(`[Discord API] readGuildWebhooks(${guildId})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/guilds/${guildId}/webhooks`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.readChannel = async function(channelId) {
  if (this.debug) console.debug(`[Discord API] readChannel(${channelId})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.updateChannel = async function(channelId, body) {
  if (this.debug) console.debug(`[Discord API] updateChannel(${channelId},${JSON.stringify(body)})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.readChannelMessage = async function(channelId, messageId) {
  if (this.debug) console.debug(`[Discord API] readChannelMessage(${channelId},${messageId})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages/${messageId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.createChannelMessage = async function(channelId, body) {
  if (this.debug) console.debug(`[Discord API] createChannelMessage(${channelId},${JSON.stringify(body)})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.readChannelMessages = async function(channelId) {
  if (this.debug) console.debug(`[Discord API] readChannelMessages(${channelId})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.updateChannelMessage = async function(channelId, messageId, body) {
  if (this.debug) console.debug(`[Discord API] updateChannelMessage(${channelId},${messageId},${JSON.stringify(body)})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages/${messageId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) throw await response.json();

  return await response.json();
};

DiscordAPI.prototype.deleteChannelMessage = async function(channelId, messageId) {
  if (this.debug) console.debug(`[Discord API] deleteChannelMessage(${channelId},${messageId})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages/${messageId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
    }
  );

  if (!response.ok) throw await response.json();

  return response.status;
};

DiscordAPI.prototype.deleteChannelMessages = async function(channelId, messages) {
  if (this.debug) console.debug(`[Discord API] deleteChannelMessages(${channelId},${JSON.stringify(messages)})`);
  const response = await fetch(
    `${this.discordAPIBaseURL}/channels/${channelId}/messages/bulk-delete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenType} ${this.token}`,
      },
      body: JSON.stringify({ messages }),
    }
  );

  if (!response.ok) throw await response.json();

  return response.status;
};

module.exports = DiscordAPI;
