const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response, body) => {
      let emb = new discord.RichEmbed()
                    .setImage(response.body.message)
                    .setColor("#00ff00")
                    .setTitle("4K NSFW here")
                    .setFooter(`©2020 Draconian Workshop | This command requested by ${msg.author.username}#${msg.author.discriminator}`)
                              
                   msg.channel.send(emb)  
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};
