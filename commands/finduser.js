const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a term to search!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
  
   const embed = new Discord.RichEmbed()
    .setTitle('User was found')
    .setColor("GREEN")
    .setDescription(matches.map(u => u.tag))
    
    message.channel.send(embed);

    message.delete();

     }
    
        module.exports.help = {
            name: "finduser"
        }
