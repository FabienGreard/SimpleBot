// Discord.js
let Discord = require("discord.js");
require("opusscript");

// autoReconnect is enabed
let bot = new Discord.Client({autoReconnect: true});
let music = require('discord.js-music-v11');

/* config russian game*/
let numberHitleft = 6;
let game = true;

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
      msg.channel.send("```List of commands : \n\n /help | list all commands \n /rand | random beetween 0-100 \n /roulette | russian game \n /version  | Version \n !play <url|search> | Play a video/music  \n !skip [number] | Skip some number of songs. Will skip 1 song if a number is not specified. \n !queue | Display the current queue. \n !pause | Pause music playback. \n !resume | Resume music playback \n !leave | Clears the song queue and leaves the channel. \n !clearqueue | Clears the song queue. ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.send("``` Bot Discord Basic - Version 1.1.0 \n Créateur : IMAGOODGUY ```");
      console.log("Command executed : /version")
    }

    if (msg.content.startsWith(prefix +"rand")) {
      // Command /rand
      rand = Math.floor(Math.random() * 100);
      msg.reply(" a fait " + rand + " ");
      console.log(rand);
   }

   if(msg.content.toLowerCase().indexOf("tchoin") !== -1 || msg.content.toLowerCase().indexOf("pute") !== -1){
     // contains tchoin or pute
     //310541740387860491 talisal
     msg.channel.send(`On a besoin de toi ${bot.users.get("310541740387860491")} !`);
     console.log(msg.content.toLowerCase());
   }

   if(msg.content.startsWith(prefix + "roulette")){
     // Comand /roulette

     let hit = Math.floor(Math.random() * numberHitleft) === 0

      console.log(` coup restant : ${numberHitleft}, jeu : ${game}, tir : ${hit}`);

      if(numberHitleft === 6){ // check if start or is playing
        msg.channel.send("``` Chargement du révolver.. ```");
      }else{
        msg.channel.send("``` il reste " + numberHitleft + " coups ```");
      }

      if(hit){ //shot
        msg.reply(" est mort... Dommage (: ");
        game = false;
      }else{
        msg.reply(" tu n'est pas mort ! ");
        numberHitleft--;
      }

      if(game === false || numberHitleft === 1){ // check if end
        msg.channel.send("``` La partie est terminé ```");
        numberHitleft = 6;
        game = true;
      }

   }

 });

bot.login('MzQ0NDI3MTE2ODUyNDEyNDE3.DGs1EA.mSobi3ZLKdiSIzNmQQ_zv7pw1N8');
