// Discord.js
var Discord = require("discord.js");
require("opusscript");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});
var music = require('discord.js-music-v11');

music(bot);
// Set the prefix
let prefix = "/";

// Ready? Set? Go!
bot.on('ready', () => {

  bot.user.setStatus("online"); //dnd , online , ldle
  //bot.user.setGame("Manger des noix");
  bot.user.setGame("In Dev");

  console.log("Oui messires ! Encore du travail ?!");
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur ! ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})

bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.send("```List of commands : \n\n /help | list all commands \n /rand | random beetween 1-100 \n !play <url|search> | Play a video/music  \n !skip [number] | Skip some number of songs. Will skip 1 song if a number is not specified. \n !queue | Display the current queue. \n !pause | Pause music playback. \n !resume | Resume music playback \n !leave | Clears the song queue and leaves the channel. \n !clearqueue | Clears the song queue.\n /version  | Version ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.send("``` Bot Discord Basic - Version 1.0.0 \n Créateur : IMAGOODGUY ```");
      console.log("Command executed : /version")
    }

    if (msg.content.startsWith(prefix +"rand")) {
      // Command /rand
      rand = Math.floor(Math.random() * 100);
      msg.reply("``` " + rand + " ```");
      console.log(rand);
   }

   if(msg.content.startsWith("tchoin") || msg.content.startsWith("pute")){
     // start with choin or pute
     msg.channel.send("``` On parle de TalissaLlil ? ```");
     console.log("choin or pute");
   }
 });

bot.login('MzQ0NDI3MTE2ODUyNDEyNDE3.DGs1EA.mSobi3ZLKdiSIzNmQQ_zv7pw1N8');
