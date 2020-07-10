const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const noPerms = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: ${message.author.username}, Missing Permission!`)
        .setColor(0xff0000)
  
  const noPerms123 = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: Usage: ~prefix <desired prefix here>`)
        .setColor(0xff0000)

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(noPerms);
  if(!args[0] || args[0 == "help"]) return message.channel.send(noPerms123);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`)
  .setFooter(`©2020 Draconian Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`)

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}