const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const config = require("../config.json");

module.exports.run = async(bot, message, args) => {
  let shoutinfo = args.slice(0).join(" ");
  let shoutchannel = message.guild.channels.find('name', config.shoutChannel);
  const noPerms = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: ${message.author.username}, 你沒有權限去執行這個指令`)
        .setColor(0xff0000)
  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noPerms).then(msg=>msg.delete(5000));
  
  const embed1 = new Discord.RichEmbed()
  .setTitle(`伺服器公告/通知`)
  .setDescription(`${shoutinfo}`)
  .setColor('GREEN')
  .setFooter(`by ${message.author.username}`)
    message.delete()
    shoutchannel.send(embed1)
  
  
}