const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let trufal = {
            "true": "Robot",
            "false": "Human"
        }

        let status = { 
            "online": "<:Online:716154830611021887> Online",
            "idle": "<:Idle:716154833287118878> Idle",
            "dnd": "<:Dnd:716154833736040518> Do Not Disturb",
            "invisible": "<:Invisible:716154830783250484> Offline"
        }

        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user)
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`${user.tag} Info`, message.author.displayAvatarURL)
        .setDescription(`**• Name：**${user.tag}\n**• ID: **${user.id}\n\n**• Account Type：**${trufal[user.bot]}\n**• Status：**${status[user.presence.status]}\n**• Game： **${user.presence.game ? user.presence.game.name : 'I do not see him playing anything!'}\n**• Created at:** ${user.createdAt}**\n\n• Roles：**${member.roles.map(roles => `${roles}`).join(', ')}\n\n**• Avatar：**[Click here](${user.displayAvatarURL})`)

        .setThumbnail(user.avatarURL)
        .setTimestamp()
    
    message.channel.send('<a:Discordloading:715868120795054142>Loading From Discord API')
  .then((message) => {
    setTimeout(function() {
    message.edit({embed});
  }, 2000)});
     
}


module.exports.help = {
  name: "warninfo"
}
