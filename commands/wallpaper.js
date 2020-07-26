const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Wallpaper Here")
    .setImage(body.url) 
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'wallpaper',
    description: 'Anime wallpapers OwO',
    usage: 'wallpaper'
  };
