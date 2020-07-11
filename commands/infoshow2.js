const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('**酷斯軍團 Koolisw Nation 伺服器規則**')
  .setDescription('歡迎來到Koolisw以及Draconian Workshop官方Discord伺服器\n\n以下規則就是對於本伺服器的制定行為和操守,任何成員以及管理員必須遵守以下規則\n\n:one:**保持友好及尊重他人**。\n不應擁有任何仇恨,騷擾以及種族或性別歧視。記得別做一個到處嗆人的小屁孩\n\n:two:**禁止發送垃圾訊息或者洗版**\n例如:文字以及表情符號方式大量發送訊息,以及在短時間內發送相同圖像都會被禁止\n\n:three:**禁止傳連結或廣告**\n除了<#699816853790392340>頻道以外,除了頻道以外在其他地方胡亂傳送連結, 例如Discord伺服器連結、任何網址等等, 會被靜音\n\n:four:')
  .setColor('BLUE')
  
  
  
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2))
}
