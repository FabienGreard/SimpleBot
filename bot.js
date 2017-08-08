// Discord.js
var Discord = require("discord.js");
require("opusscript");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});


// Set the prefix
let prefix = '/';

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
      msg.channel.send("```List of commands : \n\n /version  | Version  \n /help | Toute les commandes \n    ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.send("``` Bot Discord Basic - Version 0.0.1 \n Créateur : IMAGOODGUY ```");
      console.log("Command executed : /version")
    }

    if (msg.content.startsWith("Bonjour")) {
      // Command Bonjour
     msg.reply("Hey");
     console.log("Hey");
   }

   if (msg.content.startsWith('!play')) {
     // Command !play
     let voiceChannel = msg.member.voiceChannel;

     voiceChannel.join().then(connection =>{
       console.log("I am now in " + voiceChannel);
     }).catch(err => console.log(err));
   }

});

bot.login('MzQ0NDI3MTE2ODUyNDEyNDE3.DGs1EA.mSobi3ZLKdiSIzNmQQ_zv7pw1N8');
