const Discord = require("discord.js");
const client = new Discord.Client();
const http = require("http");
const express = require("express");
const app = express();
const config = require("./config.json");
const { Client, MessageAttachment } = require("discord.js");
var server = http.createServer(app);
var userTickets = new Map();
const fs = require("fs");
const filterwords = require("./filters.json");
const ytdl = require("ytdl-core");
client.login(process.env.TOKEN);
client.config = config;
var scount = client.guilds.size;
const db = require("quick.db")

const request = require('request-promise-native');
function postServerCount() {
    return request.post({
        uri: `https://discordbots.org/api/bots/${client.user.id}/stats`,
        headers: {
            Authorization: `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMTkzNzU5OTk3NTA2MzU4NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk1MjQ4NjQ3fQ.DBhQFTSAa0QpQbd1-w6CeKKUpwyWDAoPNWEOsgUL3yo`, // Insert token here
        },
        json: true,
        body: {
            server_count: client.guilds.size,
        },
    });
}



client.on("ready", () => {
  console.log("The bot has started!");
  client.user.setActivity(`DraconianBot V1.8 | ${client.guilds.size} Servers`, { type: "LISTENING" });

  let messageID = "717359708742352957";
  let guild = client.guilds.first();
  console.log("Ready!");
});

app.get("/", (request, response) => {
console.log(Date.now() + " Ping Received");
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



client.on("message", async message => {
    

    
  let wordformat3 = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}#${message.author.discriminator}** 錯誤格式！`
    )
    .setDescription(
      "建議格式:\n應該以「我的建議」開頭\n\n例子:  我的建議: 在服務器中添加一些東西"
    )
    .setColor("RED")
    .setImage(
      "https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FAD570E53-281E-4803-B263-A24D5697AA62.jpeg?v=1590636552412"
    );
  let wordformat4 = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}#${message.author.discriminator}** 錯誤格式！`
    )
    .setDescription(
      "建議格式:\n應該以「我的Youtube建議」開頭\n\n例子:  我的Youtube建議: 做得更多的免費robux系列"
    )
    .setColor("RED")
    .setImage(
      "https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F89E94392-9C25-4D12-9CA3-F42F06A75E7D.jpeg?v=1590636556129"
    );
  let wordformat5 = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}#${message.author.discriminator}** 錯誤格式！`
    )
    .setDescription(
      "建議格式:\n應該以「舉報目標」開頭\n\n***例子:***\n舉報目標: @realkoolisw\n舉報原因: Nil\n備注: nil\n\n***請盡量附加圖片***"
    )
    .setColor("RED")
    .setImage(
      "https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F5F569D81-83E9-4F79-BC22-1CD77A7B2540.jpeg?v=1590637439754"
    );
 
  let wordformatmsg2 = new Discord.RichEmbed()
    .setTitle(`錯誤訊息/格式`)
    .setDescription(
      "本頻道只允許輸入 !verify\n或者備用驗證方式 +verify"
    )
    .setColor("RED");


  
  if (message.channel.id === "731458514500714526") {
    const notwords2 = ["我的建議", "My Suggestion"];
    if (!notwords2.some(word => message.content.includes(word))) {
      if (!message.member.hasPermissions("ADMINISTRATOR"))
        return message
          .delete()
          .then(
            message.channel.send(wordformat3).then(msg => msg.delete(10000))
          );
    }
    if (notwords2.some(word => message.content.includes(word))) {
      message.react("✅").then(() => message.react("❌"));
    }
  }

  if (message.channel.id === "731458821809111080") {
    const notwords2 = ["我的Youtube建議", "My Youtube Suggestion"];
    if (!notwords2.some(word => message.content.includes(word))) {
      if (!message.member.hasPermissions("ADMINISTRATOR"))
        return message
          .delete()
          .then(
            message.channel.send(wordformat4).then(msg => msg.delete(10000))
          );
    }
    if (notwords2.some(word => message.content.includes(word))) {
      message.react("✅").then(() => message.react("❌"));
    }
  }

  if (message.channel.id === "712548093450780693") {
    const notwords2 = ["舉報目標"];
    if (!notwords2.some(word => message.content.includes(word))) {
      if (!message.member.hasPermissions("ADMINISTRATOR"))
        return message
          .delete()
          .then(
            message.channel.send(wordformat5).then(msg => msg.delete(10000))
          );
    }
    if (notwords2.some(word => message.content.includes(word))) {
      message.react("✅").then(() => message.react("❌"));
    }
  }

  
  if (message.channel.id === "716806723850993725") {
    const notwords2 = ["!verify", "+verify"];
    if (!notwords2.some(word => message.content.includes(word))) {
      if (!message.member.hasPermissions("ADMINISTRATOR"))
        return message
          .delete()
          .then(
            message.channel.send(wordformatmsg2).then(msg => msg.delete(10000))
          );
    }
  }

 
  if (message.guild.id === "687219262406131714") {
  if(message.channel.id === "703080590110490655") return;
  if(message.channel.id === "720286615972610048") return;
  if(message.channel.id === "700978700492996650") return;
   let embed2 = new Discord.RichEmbed().setTitle(
      `**${message.author.username}#${message.author.discriminator}** 喂！注意你的言行！`
    );
   
   if (filterwords.bannedwords.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermissions("MANAGE_MESSAGES"))
        return message
          .delete()
          .then(message.channel.send(embed2).then(msg => msg.delete(5000)));
    }
  
    let embed310101 = new Discord.RichEmbed()
      .setTitle(
        `**${message.author.username}#${message.author.discriminator}** 喂！別以為你可以ping全世界！`
      )
      .setColor("RED");
  



    const needlessword = ["@everyone", "@here"];
    if (needlessword.some(word => message.content.includes(word))) {
      if (!message.member.hasPermissions("MANAGE_MESSAGES"))
        return message
          .delete()
          .then(message.channel.send(embed310101).then(msg => msg.delete(5000)));
    }
  }

  
  
  
  
  //ticket system
  if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].title === '伺服器') {
            message.react(':create:729705244904390797')
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
        if(message.embeds.length === 1 && message.embeds[0].title === '支援服務') {
            message.react(':close:729705990265634846')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
    };
    /**
     * This was just used to send an initial embed message.
     * I copied the ID of the embed message sent and used that to check if reactions were
     * added to that. Check the 'raw' event.
     */
    if(message.content.toLowerCase() === 'd!createsupport') {
        if (message.author.id !== '611804698856521728') return;
        const embed = new Discord.RichEmbed()
        embed.setTitle('伺服器支援開票 綜合支援服務')
        embed.setDescription('按下表情按鈕<:create:729705244904390797>來創建支援開票\n\n:one:歡迎來到**Koolisw Nation**的支援服務, 由於管理員盡可能不接受私人訊息支援, 這個支援服務會更大效率以及更廣泛地為你們提供支援, 並希望你們操作愉快。\n\n:two:這個機械人會用於創建頻道以作支援, 這個頻道除咗你以外不會有其他正常成員會觀看到, 管理員會看到你所創建的開票, 請在開票前記得你在必要的情況下, 並且要正常回答管理員問你的問題, 否則視作虛假創建表情按鈕的洗版行為\n\n:three:例如在列無辜被靜音、一些比較嚴重的舉報濫用事件、伺服器各項新聞以及資訊，你都可以按下以下表情按鈕來進行支援開票。\n\n:four:你們每人最多只可創建**1**個開票, 切勿嘗試透過錯誤大量開票作洗版');
        embed.setColor('#F39237')
        message.channel.send(embed);
    }
  
  
  

 
  
  
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = config.prefix;
  
  
  if (!message.content.startsWith(prefix)) return;

  if (message.author.bot) return undefined;
  if (!message.content.startsWith(prefix)) return undefined;

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.username} using command ${cmd}`);
  }
    
    
    
   
    
    
    

  

});



client.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') { // Check if the event name is MESSAGE_REACTION_ADD
        if(payload.d.emoji.name === 'create') // If the emoji is ticketreact
        {
            if(payload.d.message_id === '730753955193159730') { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                let channel = client.channels.get(payload.d.channel_id) // Get the proper channel object.
                if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                    return;
                }
                else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('create:729705244904390797');
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    })
                    .catch(err => console.log(err));
                }
            }
        }
        // Check if the emoji is checkreact, meaning we're deleting the channel.
        // This will only be significant if our bot crashes/restarts and there are additional ticket channels that have not been closed.
        else if(payload.d.emoji.name === 'close') {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get('close:729705990265634846');
                    let user = client.users.get(payload.d.user_id);
                    client.emit('messageReactionAdd', reaction, user);
                })
                .then(msg => msg.embeds.length === 1 && msg.embeds[0].title === '支援服務' ? Promise.resolve(msg.channel) : Promise.reject('Incorrect Msg')
                ).then(ch => ch.delete('closing ticket'))
                .then(guildChannel => console.log("Deleted " + guildChannel.name))
                .catch(err => console.log(err));

            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === 'create') { // If the emoji name is ticketreact, we will create the ticket channel.
        /**
         * Here we need to check the map to see if the user's id is in there, indicating they have a ticket.
         * We also need to check if there are any other guild channels with their name concatenated with 's-ticket'. We need to 
         * check this case because the bot may have crashed or restarted, and their ID won't be stored in the map.
         */
        if(userTickets.has(user.id) || reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + '的支援')) {
            user.send("抱歉, 創建失敗, 由於你已經開啟了一個開票, 所以你無法創建更多的開票!"); // Send user msg indicating they have a ticket.
        }
        else {
            let guild = reaction.message.guild;
            // Create channel based on permissions. Note, you need to modify the permissionsOverwrites array to fit your needs for permissions.
            guild.createChannel(`${user.username}的支援`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'EMBED_LINKS'],
                        deny: ['ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'CREATE_INSTANT_INVITE'],
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },
                    {
                        allow: 'VIEW_CHANNEL',
                        id: '625907626303160354'
                    },
                    {
                        allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                        id: '724999998479007847'
                    }
                ]
            }).then(ch => {
                userTickets.set(user.id, ch.id); 
                let embed = new Discord.RichEmbed();
                embed.setTitle('支援服務');
                embed.setDescription('這是本群組的支援服務, 請在本群組管理員來臨之前想好已創建只開票的原因, 以及切勿浪費群組管理員時間\n\n群組管理員會在最遲3小時內接納你的回覆');
                embed.setColor('#40BCD8');
                ch.send(embed) 
            }).catch(err => console.log(err));
        }
    }
    else if(reaction.emoji.name === 'close') {
       
        
     if(userTickets.has(user.id)) {
            if(reaction.message.channel.id === userTickets.get(user.id)) {
                let embed = new Discord.RichEmbed();
                embed.setDescription("將在10秒內關閉。")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('closing ticket')
                    .then(channel => {
                        console.log("Deleted " + channel.name);
                        userTickets.delete(user.id);
                    })
                    .catch(err => console.log(err));
                }, 10000);
            }
        }  
        else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + '的支援')) {
            let embed = new Discord.RichEmbed();
                embed.setDescription("將在10秒內關閉。")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('closing ticket')
                    .then(channel => {
                        console.log("Deleted " + channel.name);
                        userTickets.delete(user.id);
                    })
                    .catch(err => console.log(err));
                }, 10000);
            
        }
    }
});
