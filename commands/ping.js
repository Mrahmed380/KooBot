const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`喂，你ping我嗎? 網路延遲: **${(end - start)}**ms!`)
})
}


module.exports.help = {
  name: "ping"
}