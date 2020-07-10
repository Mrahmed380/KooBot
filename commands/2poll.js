const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send("stop").then(msg=>msg.delete(5000));
  let pollinfo = args.slice(0).join(" ");
  if (!pollinfo) return message.reply("You must have something to vote for!")
    message.channel.send(`:ballot_box:請按下以下表情按鈕來選擇你最佳的選項/投票`);
    const embed = new Discord.RichEmbed()
            .setDescription(`${pollinfo}`)
    .setFooter(`本投票活動由${message.author.username}#${message.author.discriminator}舉辦`)
    const pollTopic = await message.channel.send(embed);
    message.delete()
    pollTopic.react(`✅`).then(() => pollTopic.react(`❎`));
};
