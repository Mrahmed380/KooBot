const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      const embed = New Discord.RichEmbed
      .setTitle(`Pussy Here`)
      .setImage(response.body.message)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("No NO NO, This isn't NSFW channel!")
  }
};
