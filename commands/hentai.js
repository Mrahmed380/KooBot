const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hentai");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`Heres your Hentai Image`)
    .setImage(body.url) 
    .setFooter(`© Draconian Workshop`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ngif',
    description: 'Neko Gifs OwO',
    usage: 'ngif'
  };
