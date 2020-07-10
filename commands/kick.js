const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async(client, msg, args) => {
  
  let kickTaged = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let logs = msg.guild.channels.find('name', config.logsChannel);
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${msg.author.username}, 你沒有權限去執行這個指令`)
  .setColor('RED')
  if (!msg.member.hasPermissions("KICK_MEMBERS")) return msg.channel.send(embed6).then(msg=>msg.delete(5000));
  
  let mmqembed = new Discord.RichEmbed()
  .setTitle("指令: +kick")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** 踢出一個成員\n**使用方法:** +kick [用戶] [原因]\n**例子:** +kick @RealKoolisw Noob")
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
    return msg.channel.send(kntlembed).then(msg=>msg.delete(5000))
  }
  
  let asuembed = new Discord.RichEmbed()
  .setTitle(`Please create a Channel called ${config.logsChannel} to log the bans!`)
  .setColor('#FFFF00')
  if (!logs) return msg.channel.send(asuembed).then(msg=>msg.delete(5000));
  
  let kickEmbed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle(`Action Kick`)
  .addField("用戶", `<@${kickTaged.user.id}> | **${kickTaged.user.username}#${kickTaged.user.discriminator}**`)
  .addField("執行者", `<@${msg.author.id}> | **${msg.author.username}#${msg.author.discriminator}**`)
  .addField("原因", `\`\`\`${reason}\`\`\``)
  .setTimestamp()
  .setFooter(`• Kick用戶信息`);
  
let suembed = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723>成功地踢出**_${kickTaged.user.username}#${kickTaged.user.discriminator}_** | 原因 : ${reason}!`)
  .setColor('#FFFF00')
  msg.delete()
  msg.channel.send(suembed);
  kickTaged.kick(reason);
  logs.send(kickEmbed);
  kickTaged.send(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                                 **Kick 信息**\n\n**${msg.guild.name}**\n被 **${msg.author.username}**踢出, 原因為 ${reason}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
  
};