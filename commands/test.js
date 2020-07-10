const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
  message.channel.send('\<a:Discordloading:715868120795054142>正在加載部件')
  .then((message) => {
    setTimeout(function() {
    message.edit('<a:superdiscord:698535434711465984> 你的機械人正常運作');
  }, 3000)});  
  
  
}


module.exports.help = {
  name: "test1"
}