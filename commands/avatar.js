const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setImage(`${message.author.displayAvatarURL}`)
    .addField(
      "User Avatar:",
      `[Image URL](${message.author.displayAvatarURL})`,
      true
    );

  if (!message.mentions.users.size) {
    return message.channel.send(embed);
  }

  const user = message.mentions.users.first() || message.author;
  const embed2 = new Discord.RichEmbed()
    .setColor("GREEN")
    .setImage(`${user.displayAvatarURL}`)
    .setThumbnail(`${user.displayAvatarURL}`)
    .addField(`${user.username}'s avatar:`, `[Image URL](${message.author.displayAvatarURL})`, true);

  message.channel.send(embed2);
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Utility",
  description: "Returns either yours or [member]'s avatar.",
  usage: "avatar [member]"
};
