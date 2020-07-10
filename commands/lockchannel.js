const ms = require('ms');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let ssssssss = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723>成功解鎖頻道`)
  .setColor('#FFFF00')
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    let embed6 = new Discord.RichEmbed()
    .setDescription(
      `:no_entry_sign: ${message.author.username}, you have no permission to run this command`
    )
    .setColor("RED");
    if (!message.member.hasPermissions("MANAGE_CHANNELS")) return message.channel.send(embed6).then(msg=>msg.delete(5000));
    if (!time) return message.reply('you must set a duration for the lockdown in either hours, minutes or seconds.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**Lockdown lifted.**');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        let EMDDD = new Discord.RichEmbed()
  .setDescription(`<:tick:702386031361523723>成功鎖定頻道, 長度為${ms(ms(time), { long:true })}`)
  .setColor('#FFFF00') 
        
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(EMDDD).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send(ssssssss)).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ld', 'lock'],
    permLevel: 0
};

exports.help = {
    name: 'lockdown',
    description: 'Locks a channel for a set duration (in hrs, mins or secs).',
    usage: 'lockdown <duration>'
};
