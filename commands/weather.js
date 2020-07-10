const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**請輸入一個有效地區**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("時區", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Degree類型", location.degreetype, true) //Shows the degrees in Celcius
           .addField("溫度", `${current.temperature}`, true)
           .addField("感覺像", `${current.feelslike} Degrees`, true)
           .addField("風速", current.winddisplay, true)
           .addField("濕度", ` ${current.humidity}%`, true)
           .addField("星期", `${current.day}`, true)
           .addField("日期", `${current.date}`, true)
           .setFooter(`©2020 Draconian Workshop | 這個指令由${message.author.username}#${message.author.discriminator}請求`)
           
           //Display when it's called
           message.channel.sendEmbed(embed)

    });

    message.delete();
    
    }
module.exports.help = {
    name: "weather"
}
