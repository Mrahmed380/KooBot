const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('**酷斯軍團 Koolisw Nation 詳細入會指引及伺服器教程**')
  .setDescription('歡迎來到Koolisw以及Draconian Workshop官方Discord伺服器\n\n以下內容就是對於我們伺服器的主要資訊以及詳細身份組內容，並有效地可以幫助一些新加入的成員，再加入本伺服器之前請細閱這些指引及資訊。')
  .setColor('BLUE')
  
  let embed2 = new Discord.RichEmbed()
  .setTitle('**關於我們**')
  .setDescription('本群組基於Draconian Workshop以及Realkoolisw Nation而創作的, 並於2020年3月1號創立並啟用, 聚集了在亞洲(香港, 台灣, 澳門, 馬來西亞等等), 每天都會有很多人士在這裏聊天。\n\n群組福利? 我們每星期會舉辦一些遊戲貨幣giveaway(例如:robux),以及一些大家比較敬佩的獎品(例如: nitro)\n\n只要你在本群認真地遵守群組規則並正當地聊天, 我們會十分歡迎你\n如果你沒有遵守規則的話,別怪管理員手下不留情 :|\n\n⬇請記得往下看⬇')
  .setColor('BLUE')
  
  let embed4 = new Discord.RichEmbed()
  .setTitle('**驗證程序 (只適用於新加入的成員)**')
  .setDescription('當你進入本群後, 請先把你的帳戶驗證好電子郵件及至少註冊了5分鐘, 完成之後你在必須等待10分鐘\n\n更多驗證的指引請詳細查看 <#720895433320300615> , 並在 <#716806723850993725> 頻道裏輸入驗證指令')
  .setColor('BLUE')
  
  let embedwp = new Discord.RichEmbed()
  .setTitle('**規則/本群執法部門**')
  .setDescription('當你完成以上的驗證程序之後, 希望你到規則頻道裏仔細查看本群的所有規則, 我們群組管理員一向會嚴格對所有成員執行以上的所有群組規則, 本群組的相關執法部門身份組為<@&724999998479007847>, 凡擁有此身份組的人會維持本群組治安\n\n根據Discord服務條款: 最低使用Discord的通行年齡為 **13** , 如果不遵守或者未足夠年齡請自行離開, 否則會被我們群組永久封鎖\n\n請你記得: 凡有成員違反任何群組規則會被懲處, 若果有錯誤懲罰, 請到<#714024761092603944>頻道裏進行技術支援\n\n當你被罰之後, 請希望你不要像一個屁孩般, 被罰後不滿意懲罰結果到其他群組抱怨, 這種會造成我們管理員的麻煩')
  .setColor('BLUE')
  
  let embed7 = new Discord.RichEmbed()
  .setTitle('**伺服器身分組 Server Roles**')
  .setDescription('以下就是我們本群組的所有身份組, 等級身份組會在下面, 並會列出一切的申請方法\n\n**__所有身份組 (由低至高)__**\n\n<@&687220191121375236> - 當所有成員完成驗證的時候可以獲得這個身份組\n\n<@&698904930320253006> - 當你在Roblox群或者在Discord群組舉辦2次nitro classic即可獲得\n\n<@&698370818283012096> - 每個月支付本群組100 robux, 即可獲得, 當沒有續期的時候本身份組會被取消\n\n<@&698097757998678066> - 在YouTube頻道獲得至少500訂閱, 2000次觀看次數, 即可申請\n\n <@&729001360950951977> - 在Discord伺服器, 至少有100人以及50人同時上線, 該discord伺服器的群主以及管理層該可申請, 每個Discord伺服器最高限度可以申請3-5人\n\n<@&724999998479007847> - 該為本群的管理層人員,有助維護治安以及其他事項, 包括: 群組協助,初級管理員,群管, 申請對象: 完全懂得使用機械人指令,至少加入本群三星期,經常上線經常聊天,處事公正,不怕得罪別人\n\n**__等級身份組 (由低至高)__**\n\n**等級3** <@&723457302996189245> - 擁有對於高級版抽獎的參與資格, jailbreak保險箱/skyblock等等遊戲內抽獎除外\n\n**等級10** <@&691991846888407071> - 擁有高音質的專屬語音室, 解鎖更多頻道, 未來會加更多\n\n**__懲罰角色__**\n\n<@&699260818260361257> - 當你違反本群組規則的時候, 第一次你會獲得這個角色\n<@&699260882366234725> - 第二次違反\n<@&699260925999448144> - 最後警告, 在一次違反直接封鎖\n\n有更多自定義指派的role, 請前往<#698383699346980885>')
  .setColor('BLUE')
  
  
  let verifyiteoms = new Discord.RichEmbed()
  .setTitle('即將推出')
  .setDescription('更多內容會在明天或者後天推出,敬請期待')
  .setColor('BLUE')
  
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2).then(message.channel.send(embed4).then(message.channel.send(embedwp).then(message.channel.send(embed7).then(message.channel.send(verifyiteoms))))))
}
