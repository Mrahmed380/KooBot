const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  const msgId = args[0]
  
  let embed = new Discord.RichEmbed()
  .setTitle('**Finish**')
  .setDescription('edit embed')
  .setColor('BLUE')

  
  
  message.delete()
  
  message.channel.fetchMessages({around: msgId, limit: 1})
    .then(message => {
        const fetchedMsg = message.first();
        fetchedMsg.edit(embed);
    });
}
