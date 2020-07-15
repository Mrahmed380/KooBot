const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const noPerms = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: ${message.author.username}, Missing Permission!`)
        .setColor(0xff0000)
  
  const noPerms123 = new Discord.RichEmbed()
        .setDescription(`:no_entry_sign: Usage: d!prefix <desired prefix here>`)
        .setColor(0xff0000)

  if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")
    }
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
    
}

module.exports.help = {
  name: "prefix"
}
