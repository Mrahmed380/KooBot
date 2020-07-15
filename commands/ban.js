const Discord = require("discord.js");
const fs = require('fs');
const config = require("../config.json");

exports.run = async(bot, msg, args) => {
  
  let banTaged = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let logs = msg.guild.channels.find('name', config.logsChannel);
  let mmqembed = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${msg.author.username}, Missing Permission`)
  .setColor('#FFFF00')
  if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(mmqembed).then(msg=>msg.delete(5000));
  
  let kntlembed = new Discord.RichEmbed()
  .setTitle("Command: +ban")
  .setDescription("Wrong Usage!。\n\n**Function:** Ban a member\n**Usage:** +ban [User] [Reason]\n**Example:** +ban @RealKoolisw Noob")
  .setColor('RED')
  if (!banTaged) {
    msg.delete()
  return msg.channel.send(kntlembed).then(msg=>msg.delete(30000))
  }
  
  let asuembed = new Discord.RichEmbed()
  .setTitle("指令: +ban")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** Ban一個成員\n**使用方法:** +ban [用戶] [原因]\n**例子:** +ban @RealKoolisw Noob")
  .setColor('RED')
  if (!reason) {
    msg.delete()
    return msg.channel.send(kntlembed).then(msg=>msg.delete(30000))
  }
  
  let lombed = new Discord.RichEmbed()
  .setAuthor(`Please create a called **${config.logsChannel}** to log a Ban!`)
  .setColor('#FFFF00')
  if (!logs) return msg.channel.send(lombed);
  
  let banEmbed = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor(`Action Ban`)
  .addField("Target", `<@${banTaged.user.id}> | **${banTaged.user.username}#${banTaged.user.discriminator}**`)
  .addField("User", `<@${msg.author.id}> | **${msg.author.username}#${msg.author.discriminator}**`)
  .addField("Reason", `\`\`\`${reason}\`\`\``)
  .setTimestamp()
  .setFooter(`• Ban User Information`);//
  let bsuembed = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> Banned _**${banTaged.user.username}#${banTaged.user.discriminator}**_ | ${reason}`)
  .setColor('#FFFF00')
  
  msg.delete()
  msg.channel.send(bsuembed);
  banTaged.ban(reason);
  logs.send(banEmbed);
  banTaged.send(`You are banned **${msg.guild.name}** by **${msg.author.username}**, Reason : **${reason}**`)
  
};
