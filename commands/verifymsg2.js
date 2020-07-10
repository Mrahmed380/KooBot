const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  const embed = new Discord.RichEmbed()
  .setTitle('入群前須知 Before entering the group')
 .setDescription('歡迎來到 Koolisw Nation! 為了確保我們社群的安全, 以及防止機械人大量操作, 請跟住以下指引, 來證明你是否真人\n\n在此之前, 希望你可以細閱本群組規則 <#687221932575293443> 以及詳細指引<#728432035953377370>, 因為本群一向實施嚴格的規則, 如果你不遵守的話, 別怪群組管理員不手下留情\n\n根據Discord TOS(Terms of service服務條款) 最低通行本群的年齡是 **13**, 如果不符合的話請自行離開以免日後造成誤會\n\n⚠驗證程序:\n\n我們擁有一套對於Roblox的Discord帳戶驗證, 請到 https://verify.eryn.io/ 進行你的Roblox帳戶驗證, 當你完成之後請到 <#716806723850993725> 輸入 **!verify** 通過驗證\n\n由於Roblox驗證機械人自家營運, 所以可能有時出現不穩定情況, 如果上面的方法無效請使用 **+verify**\n\n在此嚴正程序又簡單又快捷並不會問取任何個人資料,多謝合作!')
  .setColor('GREEN')
  message.channel
    .send("<a:Discordloading:715868120795054142>正在從Discord API中獲取信息")
    .then(message => {
      setTimeout(function() {
        message.edit({ embed });
      }, 2000);
    });
};

module.exports.help = {
  name: "warninfo"
};
