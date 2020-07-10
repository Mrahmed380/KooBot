const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('Draconian Workshop伺服器規則')
  .setDescription('歡迎來到Koolisw以及Draconian Workshop官方Discord伺服器\n\n以下就是對於我們伺服器的基本規則列表。所有成員以及管理員都必須遵守這些規則，否則會被作出懲處。以下規則並非完整，管理員會保留對於你對以下規則的不正當舉報的審核權利\n\n如果你對於規則以及伺服器有任何疑問，歡迎隨時到支援頻道或者私人訊息管理\n\n如果你覺得應該加入更多的規則，歡迎到建議頻道作出建議。')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FDB660F74-EFC1-4628-A888-D2184881E8BA.jpeg?v=1590465600938')
  .setColor('BLUE')
  
  let embed2 = new Discord.RichEmbed()
  .setTitle('文字頻道基本規則')
  .setDescription('')
  .setColor('BLUE')
  
  let embed4 = new Discord.RichEmbed()
  .setTitle('語音以及音樂頻道的規則')
  .setDescription('`[1]`請確保你在開MIC之前，你的背景沒有雜音以及運用你的logic來說話\n\n`[2]`在任何語音頻道，禁止尖叫及發出令人不安的聲音\n\n`[3]`不允許使用變聲器\n\n`[4]`在播放音樂之前，請確保你的音樂是沒有任何NSFW,令人不安以及暴力內容\n\n`[5]`在直播中，禁止插播有關NSFW,暴力以及仇恨內容\n\n`[6]`語音頻道的最終決定權，由管理員擁有')
  .setColor('BLUE')
  let embed7 = new Discord.RichEmbed()
  .setTitle('Discord的服務條款和準則協議')
  .setDescription('進入此服務器即表示您同意遵守Disord ToS和社區準則。\n\n不遵守Discord的規定可能會導致向Discord管理團隊舉報並被我們的服務器封鎖。\nDiscord服務條款：https://discordapp.com/terms\nDiscord社區準則：https://discordapp.com/guidelines')
  .setColor('BLUE')
  
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2).then(message.channel.send(embed4).then(message.channel.send(embed7))))
}


module.exports.help = {
  name: "rule"
}