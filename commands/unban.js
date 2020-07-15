const Discord = require('discord.js');
const config = require("../config.json");

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
    let user = args[0];

let embed1 = new Discord.RichEmbed()
  .setTitle("Command: d!unban")
  .setDescription("Usage: d!unban [user id]")
  .setColor('RED')
  let embed2 = new Discord.RichEmbed()
  .setDescription("you must supply a `UserResolvable`, i.e. a user ID.")
  .setColor('RED')
  let lombed = new Discord.RichEmbed()
  .setAuthor(`Please create a called ${config.logsChannel} to log a Ban!`)
  .setColor('#FFFF00')
  let EMDDD = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> Unbanned <@${user.id}>`)
  .setColor('#FFFF00')
  
  
    
     let logs = message.guild.channels.find('name', config.logsChannel);
    if (!logs) return message.channel.send(lombed);
    if (!user) return message.channel.send(embed2).catch(console.error);
    message.delete()
    message.guild.unban(user);
    message.channel.send(EMDDD)
    
     
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('Target:', `${user.username}#${user.discriminator} [ID: ${user.id}]`)
    .addField('Responsible moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(logs.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'unban',
    description: 'Unbans the mentioned user from the server.',
    usage: 'ban [user] [reason]'
};
