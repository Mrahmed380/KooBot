const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('Draconian Workshop伺服器內容')
  .setDescription('歡迎來到Koolisw以及Draconian Workshop官方Discord伺服器\n\n以下就是對於我們伺服器的內容列表。以下內容並非完整，管理員會保留對於你對以下內容的不正當舉報的審核權利\n\n如果你對於內容以及伺服器有任何疑問，歡迎隨時到支援頻道或者私人訊息管理。')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2Fimage0-1.jpg?v=1591341196941')
  .setColor('BLUE')
  
  let embed2 = new Discord.RichEmbed()
  .setTitle('文字頻道基本規則')
  .setDescription('** __►如果你看到有成員或者管理員違反本群組的規則 <#687221932575293443> __**\n請到 <#712548093450780693>  頻道裏進行report\n\n** __ ►對於本群組有任何建議或者改善__**\n請到 <#704653293351338044> 鍵入 `+建議: <建議信息>`建議的內容\n\n** __ ►想在本群組中了解各個身份__**\n請到 <#698383699346980885> 頻道裏查看\n\n** __ ►想在本群組中申請群組協助人員身份組?__**\nhttps://forms.gle/LhbAq8gCG2mVUQdw6\n\n** __ ►有任何問題？__**\n請到 <#714024761092603944> \n\n** __ ►還有更多疑問以及支援服務? __**\n請到 <#714024761092603944> 按下表情按鈕內拿取支援開票\n\n**__想解除封鎖或者警告__**\nhttps://forms.gle/8b43FCw7TmjESHZGA')
  .setColor('BLUE')
  
  let embed4 = new Discord.RichEmbed()
  .setTitle('社交連結')
  .setDescription('►社交連結:\n\nFACEBOOK:\nhttps://www.facebook.com/groups/202250611088315/?ref=share\n\nTWITTER:\nhttps://mobile.twitter.com/realkoolisw\n\nROBLOX:\nhttps://www.roblox.com/groups/4764660/Draconian-Workshop#!/about\n\nYOUTUBE:\nhttps://m.youtube.com/channel/UCJScqEYjfX7E1Ji5irmHIrA') 
  .setThumbnail('https://glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FF3A2FED7-6504-471B-A373-A555400718D0.jpeg?v=1590564867702')
  .setColor('BLUE')
  
  let embedwp = new Discord.RichEmbed()
  .setTitle('本伺服器的附加規則')
  .setDescription('以下附加條例是經過管理員以及詳細調查和統計出來的伺服器規則\n\n`[1]`在群組支援服務的頻道裏，禁止在非必要的情況下胡亂創建支持開單、或者洗版\n\n`[2]`禁止在Robux以外的頻道來乞求robux\n\n`[3]`禁止一切廣告以及網路連結貼文，廣告頻道以及VIP伺服器頻道除外\n\n`[4]`本群組等級屬於**PG-13**，13歲或以下的用戶，該位用戶的家長必須特別留意，在這個群組中你可能會發現少數不適當內容，但是粗言穢語以及NSFW會被永遠禁止\n\n`[5]`對於任何管理員入管理層的濫用，歡迎進行舉報\n\n`[6]`為了提高伺服器品質，擁有管理權限的身份組的用戶，在三天內發送訊息少於90條會被革職')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F4D32683C-09E3-4E72-8AE5-B904667E2310.jpeg?v=1590564880631')
  .setColor('BLUE')
  
  
  let embed7 = new Discord.RichEmbed()
  .setTitle('Discord的服務條款和準則協議')
  .setDescription('進入此服務器即表示您同意遵守Disord ToS和社區準則。\n\n不遵守Discord的規定可能會導致向Discord管理團隊舉報並被我們的服務器封鎖。\nDiscord服務條款：https://discordapp.com/terms\nDiscord社區準則：https://discordapp.com/guidelines')
  .setColor('BLUE')
  
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2).then(message.channel.send(embed4)))
} 



module.exports.help = {
  name: "rule"
}