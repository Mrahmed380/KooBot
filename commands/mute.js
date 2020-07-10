const Discord = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message, args) => {
  
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 你沒有權限去執行這個指令`)
  .setColor('RED')
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed6).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`<:no:565766936189861889> Sorry, I don't have **\`Manage Roles\`** Permission!`).then(msg=>msg.delete(5000));

  let embed5 = new Discord.RichEmbed()
  .setTitle("指令: +mute")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** Mute一個成員\n**使用方法:** +mute [用戶] [原因]\n**例子:** +mute @RealKoolisw Shut Up")
  .setColor('RED')
  
    let player = message.mentions.members.first()
    if (!player) {
      message.delete()
      return message.channel.send(embed5).then(msg=>msg.delete(30000))
    }
  let embed4 = new Discord.RichEmbed()
  .setTitle("指令: +mute")
  .setDescription("你看到這條信息的話，可能你使用方法出錯了。\n\n**內容功能:** Mute一個成員\n**使用方法:** +mute [用戶] [原因]\n**例子:** +mute @RealKoolisw Shut Up")
  .setColor('RED')
  
  let reason = args.slice(1).join(' ');
  if (!reason) {
    message.delete()
    return message.channel.send(embed4).then(msg=>msg.delete(30000))
  }
  
  let logs = message.guild.channels.find('name', config.logsChannel);
    
    let muterole = message.guild.roles.find(r => r.name === "Muted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: 'Muted',
                color: '#000000',
                permission: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch(e) {
            console.log(e.message);
        }
    };
  let embed3 = new Discord.RichEmbed()
  .setTitle(`:x: 請mention個別用戶`)
  .setColor('RED')

    if (player.roles.has(muterole.id)) {
      message.delete()
      return message.channel.send(embed3).then(msg=>msg.delete(5000))
    }
  
    await (player.addRole(muterole.id));
  
  let embed = new Discord.RichEmbed()
  .setTitle(`Action Mute`)
  .setColor('RED')
  .addField(`用戶`, `<@${player.user.id}> | **${player.user.username}#${player.user.discriminator}**`)
  .addField(`執行者`, `<@${message.author.id}> | **${message.author.username}#${message.author.discriminator}**`)
  .addField(`原因`, `\`\`\`${reason}\`\`\``)
    .setTimestamp()
  .setFooter(`• Mute User Information`);
  logs.send(embed)
  
  let embed2 = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723> 成功地靜音**_${player.user.username}#${player.user.discriminator}_** | 原因: ${reason}`)
  .setColor('GREEN')
  
  message.delete()
    message.channel.send(embed2);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "mute",
    description: "Mute ",
    usage: "mute @mention"
}