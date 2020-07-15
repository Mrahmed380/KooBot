const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  let logs = message.guild.channels.find('name', config.logsChannel);
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, Missing Permission`)
  .setColor('RED')
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed6).then(msg=>msg.delete(5000));
  if(!args[0]) return message.channel.send(`<:no:565766936189861889> Use: **\`?clear <1 - 100>\`**`).then(msg=>msg.delete(5000));
  if (!logs) return message.channel.send('');
  message.channel.bulkDelete(args[0]).then(() => {
  let embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setTitle("Clear Action")
  .addField("User", `<@${message.author.id}> | **${message.author.username}#${message.author.discriminator}**`)
  .addField("Cleared", `**${args[0]}**`)
  .addField("Channel", `${message.channel} | **${message.channel.name}**`)
  
  let kntlembed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setDescription(`Cleared `${args[0]}` Message in **${args[0]}**`)
  
  logs.send(embed);
  message.channel.send(kntlembed).then(msg=>msg.delete(30000))
});

}

module.exports.help = {
  name: "clear"
}
