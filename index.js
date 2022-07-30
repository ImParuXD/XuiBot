const http = require('http');
http.createServer(function (req, res) {
  res.write("XuiBot is Online");
  res.end();
}).listen(1919);

const discord = require('discord.js');
const client = new discord.Client();
const tf = require('@tensorflow/tfjs-node');
const nsfw = require('nsfwjs');
const axios = require('axios');
const ytdl = require("ytdl-core");

client.on('ready', () => {
   setInterval(() => {
     client.user.setActivity({
       name: `x!help | ${client.guilds.cache.size} servers`
     })
   }, 10000)
})

client.on("message", (message) => {
　    if(message.author.bot){
        return;
    }
  if (message.content.match(/とは|って何|ってなに|x!search/)) {
    message.reply(
   "https://www.google.com/search?q=" + message.content    
    );
  }
});

client.on('message', async message => {
if (message.content.startsWith("x!yt-search")){//コマンド
const AKB = message.content.split(" ").slice(1).join(" ")
if (!AKB) return message.channel.send("エラー");
const yts = require( 'yt-search' )//yt-searchを読み込む
yts( AKB, function ( err, r ) {//検索
const videos = r.videos
const playlists = r.playlists
const channels = r.channels
message.channel.send(videos[ 0 ].url )//表示
})}})

client.on("message", (message) => {
  if (message.author.id === /911602058283581440,728578687644991545/)
    return
  if (
    message.content.match(
      /クソ|ｼﾈ|消えろよ馬鹿野郎|し ね|死 ね|カ ス|ご み|プラチナⅣ沼雑魚|雑魚|ザコ|プラチナの雑魚がよ|シネ|しね|ころす|死ね|殺す|きっしょ|キモイ|しんどけや|死んどけや|五味|ちんこ|ちんちん|ほうけい|包茎|沈沈|沈々|陳子|あほ|アホ|キモイ|キモい|FUCK|Fuck|fuck|anal|dick|sex|tit|bigtit|アナ、ゥ|まんこ|漫湖|せっくす|せ、っくす|セックス|セ、ックス|きえろ|消えろ|ふぁっくゆー|ファッキュー|くだばれ|くたばれ|ばばあ|婆|クソ野郎|くそ野郎|馬鹿|はげ|ハゲ|尿|おしり|しり/
    )
  ) {
    message.channel.send("NGワードが含まれているため、削除しました");
    message.delete();
  }
});

client.on("message", (message) => {
  if (message.content === "x!sakujyobot") {
    message.channel.send(
      "https://bit.ly/3uAICqK"
    );
  }
});

client.on("message", (message) => {
　    if(message.author.bot){
        return;
    }
  if (message.content.match("NGワードが含まれているため、削除しました")) {
    message.reply(
   "パクんな"    
    );
  }
});

client.on("message", (message) => {
  if (message.author.id === "911602058283581440")
    return
  if (
    message.content.match(
      /神降臨キターーーーー!!!/
    )
  ) {
    message.channel.send("ゴミ降臨キターーーーー!!!");
    message.delete();
  }
});

client.on("message", (message) => {
  if (message.content.match(/🥺/)) {
    let react = "🥺";
    message
      .react(react)
      .then((message) => console.log("リアクション: 🥺"))
      .catch(console.error);
  }
});
client.on("message", (message) => {
  if (message.content.match(/ぴえん/)) {
    let react = "🥺";
    message
      .react(react)
      .then((message) => console.log("リアクション: 🥺"))
      .catch(console.error);
  }
});

client.on("message", (message) => {
  if (message.content === "x!website") {
    message.channel.send("https://xuibot.ddns.net/index.html");
  }
});

client.on("message", (message) => {
  if (message.content === "@1 everyone") {
    message.reply("が 1 人募集しています！ @everyone");
  }
});

client.on("message", (message) => {
  if (message.content === "@2 everyone") {
    message.reply("が 2 人募集しています！ @everyone");
  }
});

client.on("message", (message) => {
  if (message.content === "@1") {
    message.reply("が 1 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@2") {
    message.reply("が 2 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@3") {
    message.reply("が 3 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@4") {
    message.reply("が 4 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@5") {
    message.reply("が 5 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@6") {
    message.reply("が 6 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@7") {
    message.reply("が 7 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@8") {
    message.reply("が 8 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@9") {
    message.reply("が 9 人募集しています！ @here");
  }
});

client.on("message", (message) => {
  if (message.content === "@10") {
    message.reply("が 10 人募集しています！ @here");
  }
});

//占い
client.on("message", (message) => {
  if (message.content === "x!omikuji") {
    var array = ["凶", "小吉", "中吉", "吉", "大吉"];
    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    console.log(array[Math.floor(Math.random() * array.length)]);
  }
});

client.on("message", (message) => {
  if (message.content === "x!coingame") {
    var array = [":dvd:表", ":cd:裏"];
    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    console.log(array[Math.floor(Math.random() * array.length)]);
  }
});

client.on("message", (message) => {
  if (message.content === "x!status") {
    message.channel.send("https://xuibotstatus.sytes.net");
  }
})

client.login(process.env.TOKEN);