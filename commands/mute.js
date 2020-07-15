const Discord = require("discord.js");
const ms = require("ms");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, Missing Permission`)
  .setColor('RED')
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed6).then(msg=>msg.delete(5000));
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  const embed50 = new Discord.RichEmbed()
        .setTitle(`Command: d!mute`)
        .setDescription(`Usage: d!mute @user length reason`)
        .setColor(0xff0000)
        .setFooter(`Beta Feature`)
  if(!tomute) return message.channel.send(embed50);
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(embed50);
  let reason = args.slice(2).join(' ');
  if(!reason) return message.channel.send(embed50);
  
   let logs = message.guild.channels.find('name', config.logsChannel);
  
   let embed = new Discord.RichEmbed()
  .setTitle(`Action Mute`)
  .setColor('RED')
  .addField(`Target`, `<@${tomute.user.id}> | **${tomute.user.username}#${tomute.user.discriminator}**`)
  .addField(`User`, `<@${message.author.id}> | **${message.author.username}#${message.author.discriminator}**`)
   .addField(`TempMute Length`, `${ms(ms(mutetime))}`)
  .addField(`Reason`, `\`\`\`${reason}\`\`\``)
    .setTimestamp()
  .setFooter(`• Mute User Information`);
  logs.send(embed)
  
let embed10 = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> Muted **<@${tomute.id}>** for **${ms(ms(mutetime))}** | **${reason}**`)
  .setColor('GREEN')
  await(tomute.addRole(muterole.id));
  message.delete()
  message.channel.send(embed10);
  
  let embed11 = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> <@${tomute.id}> has been unmuted`)
  .setColor('YELLOW')

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(embed11);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
