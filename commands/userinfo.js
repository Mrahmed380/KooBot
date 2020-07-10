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
        .setDescription(`**• 名稱：**${user.tag}\n**• ID: **${user.id}\n\n**• 帳戶類型：**${trufal[user.bot]}\n**• 狀態：**${status[user.presence.status]}\n**• 遊戲： **${user.presence.game ? user.presence.game.name : 'I do not see him playing anything!'}\n**• 帳戶創建日期:** ${user.createdAt}**\n\n• 角色：**${member.roles.map(roles => `${roles}`).join(', ')}\n\n**• 個人資料照片鏈接：**[Click here](${user.displayAvatarURL})`)

        .setThumbnail(user.avatarURL)
        .setTimestamp()
    
    message.channel.send('<a:Discordloading:715868120795054142>正在從Discord API中獲取信息')
  .then((message) => {
    setTimeout(function() {
    message.edit({embed});
  }, 2000)});
     
}


module.exports.help = {
  name: "warninfo"
}