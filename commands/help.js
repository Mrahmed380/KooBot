const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("DraconianBot Help")
    .setColor("GREEN")
    .setDescription(
      "**prefix** `d!`\nMore Info please visit: [Here]"
    )
    .addField("**📱基本**", "`help`, `info`, `ping`, `vote`")
    .addField(
      "**⚙utility**",
      "`serverinfo`, `userinfo`, `avatar`, `test`, `embed`, `eval`, `channel`, `waether`, `botinfo`, `timer`, `translate`, `urban`, `uptime`, `stats`, `aes256`, `deaes256`"
    )
    .addField(
      "**🎃Fun**",
      "`8ball`, `joke`, `urban`, `cat`, `dog`, `duck`, `kiss`, `reverse`, `poke`, `pat`, `meme`, `smug`, `tickle`, `youtube`, `ngif`"
    )
    .addField("**:musical_note:Music (Beta)", "`play`")
    .addField(
      "**🛠️Moderation**",
      "`clear`, `ban`, `unban`, `kick`, `mute`, `tempmute`, `warn`, `unmute`, `rename`, `createemoji`, `createchannel`, `lockchannel`, `unlockdown`"
    )
    .addField(":underage:NSFW", "`pussy`, `porn`, `4knsfw`, `holo`, `anal`, `spank`, `thigh`, `ass`")
    .setFooter(
      `©2020 Draconian Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`
    )
  message.channel.send({ embed });
};
