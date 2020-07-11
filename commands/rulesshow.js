const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  
  let embed6 = new Discord.RichEmbed()
  .setDescription(`:no_entry_sign: ${message.author.username}, 這個指定只適用於 RealKoolisw`)
  .setColor('RED')
  
  if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(embed6).then(message=>message.delete(5000));
  
  
  let embed3 = new Discord.RichEmbed()
  .setTitle('Draconian Workshop伺服器規則')
  .setDescription('歡迎來到Koolisw以及Draconian Workshop官方Discord伺服器\n\n以下就是對於我們伺服器的基本規則列表。所有成員以及管理員都必須遵守這些規則，否則會被作出懲處。以下規則並非完整，管理員會保留對於你對以下規則的不正當舉報的審核權利\n\n如果你對於規則以及伺服器有任何疑問，歡迎隨時到支援頻道或者私人訊息管理\n\n如果你覺得應該加入更多的規則，歡迎到建議頻道作出建議。\n\n:point_down:請你往下看,並詳細地閱讀我們群組規則')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FB2E4A572-52D5-4C04-BDC3-81E012FF4BAE.jpeg?v=1590564812497')
  .setColor('BLUE')
  
  let embed2 = new Discord.RichEmbed()
  .setTitle('文字頻道基本規則')
  .setDescription('`[1]`在傳送任何訊息之前請確保你認真而運用你的logic\n\n`[2]`必須尊重所有成員，如果對任何成員作出冒犯性言論以及騷擾會被作出懲處\n\n`[3]`所有成員以及管理員不得凌駕於本伺服器規則之上，如經發現會被懲罰以及降職，歡迎在舉報頻道裏作出舉報\n\n`[4]`不允許在任何頻道中發送大量垃圾訊息(洗板)，包括大量文字、圖片、表情按鈕、網站連結以及大量mention等\n\n`[5]`禁止一切針對性的粗言穢語, 但少量是允許的\n\n`[6]`禁止一切色情內容以及暴力內容。\n\n`[7]`禁止對種族、性別、膚色以及宗教作出歧視\n\n`[8]`禁止一切對於外界的廣告及自我推銷，例如Discord伺服器邀請連結。廣告頻道除外\n\n`[9]`禁止以任何形式欺詐以及欺騙任何成員以及管理員，例如詢問密碼以及詢問個人資料。\n\n`[10]`禁止公開詢問或者披露任何成員的個人信息(例如:年齡,住宅地址,電子郵件,密碼,如此類推)\n\n`[11]`每條頻道只適用於某些用途(例如:你不能在普通的文字頻道裏使用機械人指令、你不能在錯誤頻道裏進行舉報以及建議)\n\n`[12]`禁止一切在此伺服器上的所有備用帳戶，但此規則不適用於對於測試用途的管理員\n\n`[13]`每天在圖片頻道或者其他頻道裏，不得發送相同圖標或者圖像三次。\n\n`[14]`任何用戶圖標、自定義狀態、用戶名稱或者暱稱，禁止NSFW或者惡意內容\n\n`[15]`不允許上傳任何未經允許的安裝檔案，例如exe, apk, bat, dmg, iso\n\n`[16]`不允許上傳任何有病毒的檔案、IP地址收集網站、以及任何傷害文件\n\n`[17]`本伺服器只適用於允許 中文繁體字 中文簡體字 英語 ，但不允許在沒有正當解釋下說出其他語言的文字，例如日文以及韓文，以及其他語言的粗言穢語\n\n`[17]`所有頻道的固定訊息會是作為緊急訊息或者規則\n\n`[18]`在這伺服器中請盡量不要討論政治，以免有用戶之間的政治衝突以及意見不合\n\n`[18]`禁止在非必要的情況下tag任何用戶以及身份組\n\n`[19]`禁止假冒他人！例如大頭帖、用戶名稱等等，如經發現會被直接踢除\n\n`[20]`如果你對伺服器的懲罰準則以及有任何不滿、有任何誤會以及不正當懲罰，請到支援頻道\n\n`[21]`如果你違反以上任何一個守則，被警告一次；再次違反，會被靜音60分鐘以及警告第二次；再一次違反，靜音二十四小時；在一次違反，直接踢出+封鎖\n\n`[22]`管理員會在任何警告以及懲罰準則內，擁有最終決定權。禁止向管理員浪費時間以及撒謊，否則你會視作不遵守規則導致被踢出。\n\n`[22]`禁止一切具阻礙性的屁孩行為, 嚴重影響聊天體驗, 即可被靜音6小時\n\n⚠警告！NSFW只允許法外頻道來使用')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F395D4399-2F14-4DEF-AEA6-3BF955875DAB.jpeg?v=1590564827872')
  .setColor('BLUE')
  
  let verifyiteoms = new Discord.RichEmbed()
  .setTitle('驗證程序 (只適用於新加入的成員)')
  .setDescription('確保伺服器安全以及防止大量操作者影響本伺服器正常體驗，請到<#716806723850993725>進行人工驗證，我們會提供一套指令代碼來確保你是否人機，請把以下的指令代碼輸入到該頻道，即可加入伺服器。\n\n當你同意以上群組規則以及守則的時候，請輸入代碼！')
  .addField('指令代碼 (請輸入)','followrule 2020')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FF3A2FED7-6504-471B-A373-A555400718D0.jpeg?v=1590564867702')
  .setColor('BLUE')
  
  let embed4 = new Discord.RichEmbed()
  .setTitle('語音以及音樂頻道的規則')
  .setDescription('`[1]`請確保你在開MIC之前，你的背景沒有雜音以及運用你的logic來說話\n\n`[2]`在任何語音頻道，禁止尖叫及發出令人不安的聲音\n\n`[3]`不允許使用變聲器\n\n`[4]`在播放音樂之前，請確保你的音樂是沒有任何NSFW,令人不安以及暴力內容\n\n`[5]`在直播中，禁止插播有關NSFW,暴力以及仇恨內容\n\n`[6]`語音頻道的最終決定權，由管理員擁有')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2FF3A2FED7-6504-471B-A373-A555400718D0.jpeg?v=1590564867702')
  .setColor('BLUE')
  
  let embedwp = new Discord.RichEmbed()
  .setTitle('本伺服器的附加規則')
  .setDescription('以下附加條例是經過管理員以及詳細調查和統計出來的伺服器規則\n\n`[1]`在群組支援服務的頻道裏，禁止在非必要的情況下胡亂創建支持開單、或者洗版\n\n`[2]`禁止在Robux以外的頻道來乞求robux\n\n`[3]`禁止一切廣告以及網路連結貼文，廣告頻道以及VIP伺服器頻道除外\n\n`[4]`本群組等級屬於**PG-13**，13歲或以下的用戶，該位用戶的家長必須特別留意，在這個群組中你可能會發現少數不適當內容，但是粗言穢語以及NSFW會被永遠禁止\n\n`[5]`對於任何管理員入管理層的濫用，歡迎進行舉報\n\n`[6]`為了提高伺服器品質，擁有管理權限的身份組的用戶，在三天內發送訊息少於90條會被革職\n\n`[7]`本群有權開除或者踢出品行低劣(即使有遵守群組規則)的用戶')
  .setThumbnail('https://cdn.glitch.com/ecc800a4-c81e-42bd-8b1e-4f5c4b50a7fd%2F4D32683C-09E3-4E72-8AE5-B904667E2310.jpeg?v=1590564880631')
  .setColor('BLUE')
  
  
  let embed7 = new Discord.RichEmbed()
  .setTitle('Discord的服務條款和準則協議')
  .setDescription('進入此服務器即表示您同意遵守Disord ToS和社區準則。\n\n不遵守Discord的規定可能會導致向Discord管理團隊舉報並被我們的服務器封鎖。\n\n`[1]`請注意, 根據Discord服務條款, 通行本群之最低年齡為 **13**, 如果你未夠年齡的話請自行退出本群, 如果發現以及充分證據證明你是under 13, 你會被本群永久封鎖並得到舉報\n\nDiscord服務條款：https://discordapp.com/terms\nDiscord社區準則：https://discordapp.com/guidelines')
  .setColor('BLUE')
  
  
  message.delete()
  message.channel.send(embed3).then(message.channel.send(embed2).then(message.channel.send(embed4).then(message.channel.send(embedwp).then(message.channel.send(embed7).then(message.channel.send(verifyiteoms))))))
}


module.exports.help = {
  name: "rule"
}
