const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.guild.id === "687219262406131714") return
  let messageID = args[0];
    if (isNaN(messageID)) {
        message.author.send("Not an ID")
        return;
    }
    let messagea = message.channel.fetchMessages(messageID);
    message.channel.fetchMessage(messageID).then(messagea => {
    let reportEmbed = new Discord.RichEmbed()
        .setTitle("用戶訊息舉報")
        .setColor("#F7E533")
        .addField("訊息", messagea.content)
        .addField("舉報目標", `${messagea.author}`)
        .addField("舉報者", `${message.author} with ID: ${message.author.id}`)
        .addField("時間", message.createdAt)
    let reportschannel = message.guild.channels.find(`name`, botconfig.reportsChannel);
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o => {});
    reportschannel.send(reportEmbed);
    message.delete();
    return;
})
};

module.exports.help = {
  name: "help"
};
