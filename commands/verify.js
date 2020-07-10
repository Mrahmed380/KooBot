const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  
  let role = message.guild.roles.find(r => r.name === "成員 Member");

  // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
  let member = message.mentions.members.first();
  

  // or the person who made the command: let member = message.member;

  // Add the role!
  const embed = new Discord.RichEmbed()
  .setTitle('驗證成功')
  .setDescription('恭喜你完成本群組的入會驗證，我會在`5`秒內委派成員身份組給你')
  .setColor('GREEN')
  
  message.delete()
  message.member.addRole(role).catch(console.error)

  // Remove a role!
};
