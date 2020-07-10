const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== config.ownerID) return;
  var request = require('request')
    var id = 'UCJScqEYjfX7E1Ji5irmHIrA'
    var key= process.env.YT_KEY
    
    var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;
    
    request({
      method: 'GET',
      url: url
    }, function (err, response, text) {
if(err) {
return
}
      
      var json = JSON.parse(text);
      var subc = json.items[0].statistics.subscriberCount
message.channel.send(`${subc} is the number of koolisw channel's subscribers`)
      })
}


module.exports.help = {
  name: "help"
}