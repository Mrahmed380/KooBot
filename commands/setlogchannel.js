const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const noPerms = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: ${message.author.username}, Missing Permission!`)
        .setColor(0xff0000)
  
  const noPerms123 = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: Usage: d!prefix <channel name here>`)
        .setColor(0xff0000)

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(noPerms);
  if(!args[0] || args[0 == "help"]) return message.channel.send(noPerms123);

  let logchannels = JSON.parse(fs.readFileSync("./setlogchannel.json", "utf8"));

  logchannels[message.guild.id] = {
    logchannels: args[0]
  };

  fs.writeFile("./setlogchannel.json", JSON.stringify(logchannels), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Log Channel Set!")
  .setDescription(`Set to ${args[0]}`)
  .setFooter(`©2020 Draconian Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`)

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
