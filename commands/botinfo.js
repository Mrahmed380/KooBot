const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `${bot.user.username}`, inline)
    .addField("Bot Owner", "<@611804698856521728>", inline )
    .addField("Servers", `${servsize}`, inline)
    .addField("Channels", `${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Bot Version", `v11.4.2`)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`©2020 Draconian Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
