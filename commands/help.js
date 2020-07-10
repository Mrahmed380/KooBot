const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("DraconianBot Help")
    .setColor("GREEN")
    .setDescription(
      "**機械人預設prefix** `koo!`\nMore Info please visit: [Here]"
    )
    .addField("**📱基本**", "`help`, `info`, `ping`, `getinvite`")
    .addField(
      "**⚙高效**",
      "`serverinfo`, `userinfo`, `avatar`, `test`, `embed`, `eval`, `roleinfo`, `waether`, `botinfo`"
    )
    .addField(
      "**🎃娛樂**",
      "`8ball`, `joke`, `urban`, `cat`, `dog`, `cows`, `kill`, `reverse`"
    )
    .addField(
      "**🛠️管理**",
      "`clear`, `ban`, `kick`, `mute`, `tempmute`, `warn`, `unmute`"
    )
    .addField("📁自定義功能", "`setprefix`")
    .setFooter(
      `©2020 Draconian Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`
    )
  message.channel.send({ embed });
};
