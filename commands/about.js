const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setTitle(`關於`)
            .setDescription(`${bot.user.username} 由 ${config.creator}編寫以及創作, 我們的支持Discord伺服器  [加入我們](https://discord.gg/jwgcHMs)`)
            .setThumbnail(bot.avatarURL)
            .addField(`版本`, `${config.version}`, true)
            .addField(`版本狀態`, `${config.branch}`, true)
            .addField(`Prefix`, `${config.prefix}`, true)
            .addField(`Tag用戶標籤`, `${bot.user.tag}`, true)
            .addField(`ID用戶條碼`, `${bot.user.id}`, true)
            .addField(`Discord.js 套件版本`, `${Discord.version}`, true)
            .setColor('GREEN')
            .setFooter(`©2020 RealKoolisw 版權所有   ${bot.user.username}v${config.version}`)
        message.channel.send(embed)
}


module.exports.help = {
  name: "userdinfo"
}