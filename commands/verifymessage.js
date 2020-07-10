const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  const embed = new Discord.RichEmbed()
  .setTitle('Draconian Workshop伺服器認證')
  .setDescription('為了防止機械人大洋操作以及濫用程序，請在以下輸入指令`+verify` 來進行認證。\n\n如果你加入伺服器後120小時內也不進行認證，你會被踢出。\n\n只需輸入指令`+verify` 來踏入在這個伺服器的旅途!')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F966E2678-28D5-44BB-A7E3-6B8D773261D9.gif?v=1591622183092')
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
