const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.reply("Type something!");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("Cannot Search!")

        let urbEmbed = new Discord.RichEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Agree", json.thumbs_up, true)
        .addField("Disagree", json.thumbs_down, true)
        .setFooter(`Written in Urban by ${json.author}`);

        message.channel.send(urbEmbed)
    });


}

module.exports.help = {
    name: "urban"
}
