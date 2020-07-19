const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  try {
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/pat', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' pats ' + member.user.username)
        .setColor('#363942')
        .setDescription(message.author.username + ' patted ' + member.user.username + '!')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('You need to mention the user to pat!');
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['upat'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'pat',
  category: 'Weeb',
  description: 'Pats a user for you.',
  usage: 'pat <user>'
};
