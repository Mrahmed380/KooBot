const Discord = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message, args) => {
  
    let logs = message.guild.channels.find('name', config.logsChannel);
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 你沒有權限去執行這個指令`)
  .setColor('RED')
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed6).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`<:no:565766936189861889> Sorry, I don't have **\`Manage Roles\`** Permission!`).then(msg=>msg.delete(5000));
let embed7 = new Discord.RichEmbed()
  .setTitle("指令: +unmute")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** Unute一個成員\n**使用方法:** +unmute [用戶]\n**例子:** +unmute @RealKoolisw")
  .setColor('RED')
    let member = message.mentions.members.first()
    if (!member) {
      message.delete()
      return message.channel.send(embed7).then(msg=>msg.delete(5000))
    }
    let embed8 = new Discord.RichEmbed()
  .setDescription(`:x: **_${member.user.username}#${member.user.discriminator}_**未被靜音`)
  .setColor('RED')
    let muterole = message.guild.roles.find(r => r.name === "Muted");
    if (!member.roles.has(muterole.id)) {
      message.delete()
      return message.channel.send(embed8).then(msg=>msg.delete(5000));
    }
  
  let embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setTitle(`Action Unmute`)
  .addField(`User`, `<@${member.user.id}> | **${member.user.username}#${member.user.discriminator}**`)
  .addField(`Executor`, `<@${message.author.id}> | **${message.author.username}#${message.author.discriminator}**`)
    .setTimestamp()
  .setFooter(`• Unmute User Information`);
  let embed5 = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> 成功地取消靜音 **_${member.user.username}#${member.user.discriminator}_**`)
  .setColor('RED')
  
  logs.send(embed)
  message.delete()
  
    await (member.removeRole(muterole.id));
    message.channel.send(embed5);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "unmute",
    description: "Unmute someone",
    usage: "unmute @mention"
}
