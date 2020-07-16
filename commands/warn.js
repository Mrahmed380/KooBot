const Discord = module.require("discord.js");
 const fs = require("fs");
 const ms = require("ms");
 const config = require("../config.json");
 let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))

  exports.run = async (bot, message, args) =>{
   let embederror = new Discord.RichEmbed()
     .setDescription(
       `:no_entry_sign: ${message.author.username}, you have no permission to run this command`
     )
     .setColor("RED");

    let kntlembed = new Discord.RichEmbed()
   .setTitle("Command: d!warn")
   .setDescription("Wrong Usage!\n\n**Function:** Ban a member\n**Usage:** +ban [user] [reason]\n**Example:** +ban @RealKoolisw Noob")
   .setColor('RED')

 
    let logs = message.guild.channels.find('name', config.logsChannel);
     //!warn @daeshan <reason>
     if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(embederror);
     let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
     if(!wUser) return message.channel.send(kntlembed);
     let reason = args.join(" ").slice(22);

      if(!warns[wUser.id]) warns[wUser.id] = {
       warns: 0
     };

      warns[wUser.id].warns++;

      fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
       if (err) console.log(err)
     });

      let warnEmbed = new Discord.RichEmbed()
     .setDescription("Warns")
     .setAuthor(message.author.username)
     .setColor("#fc6400")
     .addField("Warned User", `<@${wUser.id}>`)
     .addField("Warned In", message.channel)
     .addField("Number of Warnings", warns[wUser.id].warns)
     .addField("Reason", reason);
     let bsuembed = new Discord.RichEmbed()
   .setDescription(`<:tick:702386031361523723>Successfully Warned **${wUser.user.username}#${wUser.user.discriminator}** | ${reason}！`)
   .setColor('GREEN')
     let test1 = new Discord.RichEmbed()
   .setDescription(`<:tick:702386031361523723>Successfully Muted **${wUser.user.username}#${wUser.user.discriminator}** For 1 Hours | Reached Two Warnings`)
   .setColor('GREEN')
     let test2 = new Discord.RichEmbed()
   .setDescription(`<:tick:702386031361523723>Kicked **${wUser.user.username}#${wUser.user.discriminator}** | Reached Warnings 3`)
   .setColor('GREEN')
     let test3 = new Discord.RichEmbed()
   .setDescription(`<:tick:702386031361523723>Banned **${wUser.user.username}#${wUser.user.discriminator}** | Reached 5 Warnings`)
   .setColor('GREEN')
 let test4 = new Discord.RichEmbed()
   .setDescription(`<:tick:702386031361523723>Unmuted **${wUser.user.username}#${wUser.user.discriminator}** | Mute Period Ended`)
   .setColor('GREEN')

      if(!logs) return message.reply("Couldn't find logs channel or run **d!setlogchannel**");
     message.channel.send(bsuembed)
     logs.send(warnEmbed);

      if(warns[wUser.id].warns == 2){
       let muterole = message.guild.roles.find(`name`, "Muted");
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

        let mutetime = "1h";
       await(wUser.addRole(muterole.id));
       message.channel.send(test1);

        setTimeout(function(){
         wUser.removeRole(muterole.id)
         message.channel.send(test4)
       }, ms(mutetime))
     }
     if(warns[wUser.id].warns == 3){
       message.guild.member(wUser).kick(reason);
       message.channel.send(test2)
     }
   if(warns[wUser.id].warns == 5){
       message.guild.member(wUser).ban(reason);
       message.channel.send(test3)
     }

    }

  module.exports.help = {
   name: "warn"
 }
