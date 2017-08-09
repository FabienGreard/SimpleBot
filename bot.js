// Discord.js
let Discord = require("discord.js");
require("opusscript");

// autoReconnect is enabed
let bot = new Discord.Client({autoReconnect: true});
let music = require('discord.js-music-v11');

/* config russian game*/
let numberHitleft = 6;
let gameRussian = true;

/* config TicTac game*/
let gameTicTac = true;
let gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lastPion = "X";

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
      msg.channel.send("```List of commands : \n\n /help | list all commands \n /rand | random beetween 0-100 \n /roulette | russian game \n /tictac [number] | tictac game \n /version  | Version \n !play <url|search> | Play a video/music  \n !skip [number] | Skip some number of songs. Will skip 1 song if a number is not specified. \n !queue | Display the current queue. \n !pause | Pause music playback. \n !resume | Resume music playback \n !leave | Clears the song queue and leaves the channel. \n !clearqueue | Clears the song queue. ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.send("``` Bot Discord Basic - Version 1.2.0 \n Créateur : IMAGOODGUY ```");
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

      console.log(` coup restant : ${numberHitleft}, jeu : ${gameRussian}, tir : ${hit}`);

      if(numberHitleft === 6){ // check if start or is playing
        msg.channel.send("``` Chargement du révolver.. ```");
      }else{
        msg.channel.send("``` il reste " + numberHitleft + " coups ```");
      }

      if(hit){ //shot
        msg.reply(" est mort... Dommage (: ");
        gameRussian = false;
      }else{
        msg.reply(" tu n'est pas mort ! ");
        numberHitleft--;
      }

      if(gameRussian === false || numberHitleft === 1){ // check if end
        msg.channel.send("``` La partie est terminée ```");
        numberHitleft = 6;
        gameRussian = true;
      }

   }

   if(msg.content.startsWith(prefix + "tictac")){
     // Command /tictac
      let number = msg.content.split(" ")[1];
      console.log(number);

      if(number > 0 && number < 10){
        if(lastPion == "X"){ // choose wich pion has to be placed
          lastPion = "O"
        }else{
          lastPion = "X"
        }

        //set the board with the player actions
        if(gameBoard[number -1] != "X" || gameBoard[number -1] != "O"){
          gameBoard[number -1] = lastPion;
        }else{
          msg.channel.send("``` Placement occupé ```");
        }

        if(gameTicTac != false && gameBoard.join(" ").indexOf("X") === -1){//check if the game has start
          msg.channel.send("``` La partie commence ```");
          msg.channel.send("``` " + lastPion + " a joué ```");
          showBoard();
        }else if(!checkBoard()){ // check if someone has won
          msg.channel.send("``` " + lastPion + " a joué ```");
          showBoard();
        }else if(checkBoard()){ // reset
          msg.channel.send("``` " + lastPion + " gagne ! ```");
          msg.channel.send("``` La partie est terminée ```");
          gameTicTac = true;
          gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          lastPion = "X";
        }
      }else{
        msg.channel.send("``` Chiffre manquant ou érronné (1-9) ```");
      }
   }

   function showBoard(){ // showBoard
     msg.channel.send("``` " + gameBoard[0] + " | " + gameBoard[1] + " | " + gameBoard[2] + " \n " + gameBoard[3] + " | " + gameBoard[4] + " | " + gameBoard[5] + " \n " + gameBoard[6] + " | " + gameBoard[7] + " | " + gameBoard[8] + " ```");
   }

   function checkBoard(){// check all the position
     if(gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] || gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] || gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]){
       return true;
     }else if(gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] || gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] || gameBoard[3] === gameBoard[2] && gameBoard[3] === gameBoard[8]){
       return true
     }else if(gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] || gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]){
       return true
     }else{
       return false
     }
   }

 });

bot.login('MzQ0NDI3MTE2ODUyNDEyNDE3.DGs1EA.mSobi3ZLKdiSIzNmQQ_zv7pw1N8');
