const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) =>{
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
   if(!wUser) return message.reply("Couldn't find them yo");
    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
   fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
   let warnEmbed = new Discord.RichEmbed()
    .setDescription("<@${wUser.id}>的統計數據")
    .setColor("#fc6400")
    .addField("被警告的數量", warns[wUser.id].warns)


   message.channel.send(warnEmbed);
}

module.exports.help = {
  name: "warnlevel"
}
