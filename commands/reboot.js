exports.run = (client, message) => {
  if (message.author.id !== '611804698856521728') return;
  message.channel.send('Restarted.').then(() => {
  process.exit(1);
})
};

exports.conf = {
  enabled: true,  
  guildOnly: true,
  aliases: ['restart', 'abort'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Reboots the bot.',
  usage: 'reboot'
};
