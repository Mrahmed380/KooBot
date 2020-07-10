const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  let logs = message.guild.channels.find('name', config.logsChannel);
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 你沒有權限去執行這個指令`)
  .setColor('RED')
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed6).then(msg=>msg.delete(5000));
  if(!args[0]) return message.channel.send(`<:no:565766936189861889> Use: **\`?clear <1 - 100>\`**`).then(msg=>msg.delete(5000));
  if (!logs) return message.channel.send('');
  message.channel.bulkDelete(args[0]).then(() => {
  let embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setTitle("清除操作")
  .addField("執行者", `<@${message.author.id}> | **${message.author.username}#${message.author.discriminator}**`)
  .addField("已清除", `**${args[0]}**`)
  .addField("頻道", `${message.channel} | **${message.channel.name}**`)
  logs.send(embed);
});

}

module.exports.help = {
  name: "clear"
}