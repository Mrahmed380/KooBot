const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('Draconian Workshop伺服器身份組詳情')
  .setDescription('這是我們伺服器的特殊身份組:\n\n`名人/網紅 Youtuber` - 當你的YouTube頻道達到1000以及更多訂閱和至少30,000的總觀看次數才能拿到這個身份組\n\n`贊助者 Sponsor` - 當你捐贈了本群組500robux或者更多你就可以達到這個身份組\n\n`伺服器加成者 Server Booster` - 當你加成了服器你就可以獲得這個role\n\n`會員 VIP` - 每個月支付本群組100robux就可以獲得這個身份組\n\n`迷因大師memer` 在 `迷因meme` 頻道裏傳送出自己做的meme, 如果該圖片獲得30個讚以及受管理員認證後你就可以獲得這個身份組\n\n`抽獎贏家 lucky guys` - 如果在抽獎中贏取了最高獎項你就可以獲得這個role\n\n`抽獎主辦者 Giveaway Holder` - 這個身份組是主要用來舉辦抽獎, 但是不會公開招募, 這個角色10分稀有的')
  .setColor('BLUE')
  
  let embed2 = new Discord.RichEmbed()
  .setTitle('等級角色')
  .setDescription('`圖片通行證img` - 當你本伺服器中達到五級，你就可以在任何一條頻道中傳送訊息以及到 #圖片區image 中聊天\n\n`音樂通行證music`  - 當你在本群組到10級的時候，你就可以隨意使用音樂機械人去聆聽你至愛的音樂\n\n`活躍 Active` - 當你在本群組達到15級的時候，除了先前的身份組獎勵，你亦可以到私人語音頻道以及特別的私人頻道聊天')
  .setColor('BLUE')
  
  let embed4 = new Discord.RichEmbed()
  .setTitle('懲罰角色')
  .setDescription('`最後警告Last Warn` - 這個是最後本群組警告即是說你違反了本群組規則三次，在違反多一次你會被踢出\n\n`警告Warning 2` -當你再次違反本群組規則的時候，你會得到這個角色\n\n`警告Warning1` - 當你違反任何本群組規則的時候，在第一次你會得到這個角色')
  .setColor('BLUE')
  
  let embed5 = new Discord.RichEmbed()
  .setTitle('Optional/ Reaction Roles ')
  .setDescription('按下以下表情按鈕才獲得身份組\n\n:gift:  - `Giveaway Notification` - 當有抽獎舉辦的時候你會收到通知\n\n:bellhop:  - `有通知Notification` - 群組有公告或者通知的時候你會收到通知\n\n:radio:  -`VIP server notification` - 開啟VIP服務器通知\n\n:underage:  - `法外頻道觀看許可 ruleless`\n\n 想進入法外頻道，請按下下面emoji: :underage: \n法外頻道係不受群組管理員以及群主規管, 不受群組規則規管以及內容封鎖器, 但管理員或者群主會檢視該channel,必須遵守基本社群規則(例如不接受個別針對性仇恨言論以及起底行為,種族歧視以及性別歧視)\n\n請注意：根據 Discord 服務條款，任何在 #洗版區spam  或 #暗區without-rule   中有包括小朋友或未成年人的NSFW內容，皆屬違規。\n第一次犯規，會被警告。犯規第二次之後，你會立即被封鎖。')
  .setColor('BLUE')
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2).then(message.channel.send(embed4).then(message.channel.send(embed5))))
}


module.exports.help = {
  name: "rule"
}