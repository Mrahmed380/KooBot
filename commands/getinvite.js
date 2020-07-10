const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   let embed = new Discord.RichEmbed()
  .setTitle('Get Invite ')
  .setDescription('你好，感謝您當我這個機械人真的存在，聽說你想要邀請別人嗎？')
  .addField('**Roblox群組:**', 'https://www.roblox.com/groups/4764660/Draconian-Workshop#!/about')
  .addField('**哦，你想要邀請我這個機械人進入你的伺服器嗎？**', 'https://discordapp.com/oauth2/authorize?client_id=711030424280760361&scope=bot&permissions=2080374975')
  .setTimestamp()
  .setColor('GREEN')
  
  message.member.send(embed)
  message.channel.send('Check your **DM**, BY KOOLISW')
}


module.exports.help = {
  name: "ping"
}