const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async(client, msg, args) => {
  
  let kickTaged = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let logs = msg.guild.channels.find('name', config.logsChannel);
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${msg.author.username}, Missing Permission`)
  .setColor('RED')
  if (!msg.member.hasPermissions("KICK_MEMBERS")) return msg.channel.send(embed6).then(msg=>msg.delete(5000));
  
  let mmqembed = new Discord.RichEmbed()
  .setTitle("Command: +kick")
  .setDescription("Usage: d!kick @user reason")
  .setColor('RED')
  if (!kickTaged) {
    msg.delete()
    return msg.channel.send(mmqembed).then(msg=>msg.delete(30000))
  }
  
  let kntlembed = new Discord.RichEmbed()
  .setTitle("指令: +kick")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** 踢出一個成員\n**使用方法:** +kick [用戶] [原因]\n**例子:** +kick @RealKoolisw Noob")
  .setColor('RED')
  if (!reason) {
    msg.delete()
    return msg.channel.send(mmqembed).then(msg=>msg.delete(5000))
  }
  
  let asuembed = new Discord.RichEmbed()
  .setTitle(`Please create a Channel called ${config.logsChannel} to log the bans!`)
  .setColor('#FFFF00')
  
  
  let kickEmbed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle(`Action Kick`)
  .addField("Target", `<@${kickTaged.user.id}> | **${kickTaged.user.username}#${kickTaged.user.discriminator}**`)
  .addField("User", `<@${msg.author.id}> | **${msg.author.username}#${msg.author.discriminator}**`)
  .addField("Reason", `\`\`\`${reason}\`\`\``)
  .setTimestamp()
 
  
let suembed = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> Kicked **_${kickTaged.user.username}#${kickTaged.user.discriminator}_** | ${reason}`)
  .setColor('#FFFF00')
  msg.delete()
  msg.channel.send(suembed);
  kickTaged.kick(reason);
  
  kickTaged.send(`You was been kicked in **${msg.guild.name}**\ by **${msg.author.username}**, ${reason}`)
  logs.send(kickEmbed);
};
