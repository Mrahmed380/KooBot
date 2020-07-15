const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  const msgId = args[0]
  
  let embed = new Discord.RichEmbed()
  .setTitle('**身份組列表 Role List**')
  .setDescription('**__所有身份組 (由低至高)__**\n\n<@&687220191121375236> - 當所有成員完成驗證的時候可以獲得這個身份組\n\n<@&731440501240102952> -  當你曾經加成過我們伺服器之後, 無論現在有沒有boost, 我們會銘記於心, 感謝您曾經加成過我們的伺服器, 你可以獲得這身份組\n\n<@&731497424773841046> - 若果你向50位用戶邀請他們到這個伺服器, 他們加入了, 你可以獲得這個身份組\n\n<@&732516318724489238> - 當你在Discord群組舉辦2次nitro classic或者舉辦**700** robux以上的抽獎, 即可獲得\n\n<@&698904930320253006> - 當你支付Roblox群組 **500**robux的物品, 之後你可以獲得這個身份組 \n\n<@&698370818283012096> - 每個月支付本群組100 robux, 即可獲得, 當沒有續期的時候本身份組會被取消\n\n<@&698097757998678066> - 在YouTube頻道獲得至少500訂閱, 2000次觀看次數, 即可申請\n\n <@&729001360950951977> - 在Discord伺服器, 至少有100人以及50人同時上線, 該discord伺服器的群主以及管理層該可申請, 每個Discord伺服器最高限度可以申請3-5人\n\n<@&711608147969835011> - 當你加成boost這個伺服器的時候你會被自動獲取這個身份\n\n<@&724999998479007847> - 該為本群的管理層人員,有助維護治安以及其他事項, 包括: 群組協助,初級管理員,群管, 申請對象: 完全懂得使用機械人指令,至少加入本群三星期,經常上線經常聊天,處事公正,不怕得罪別人\n\n**__等級身份組 (由低至高)__**\n\n**等級3** <@&723457302996189245> - 擁有對於高級版抽獎的參與資格, jailbreak保險箱/skyblock等等遊戲內抽獎除外\n\n**等級10** <@&691991846888407071> - 擁有高音質的專屬語音室, 解鎖更多頻道, 未來會加更多\n\n**等級15** <@&730441955607183391> - 包括先前身份組的所有待遇, 這個身份組你可以查看本群組的審核日子, 解鎖私人聊天頻道等等\n\n**__懲罰角色__**\n\n<@&699260818260361257> - 當你違反本群組規則的時候, 第一次你會獲得這個角色\n<@&699260882366234725> - 第二次違反\n<@&699260925999448144> - 最後警告, 在一次違反直接封鎖\n\n有更多自定義指派的role, 請前往<#698383699346980885>\n\n如果你想申請以上身份組, 請到<#714024761092603944>頻道按下表情符支援及獲取')
  .setColor('BLUE')

  
  
  message.delete()
  
  message.channel.fetchMessages({around: msgId, limit: 1})
    .then(message => {
        const fetchedMsg = message.first();
        fetchedMsg.edit(embed);
    });
}
