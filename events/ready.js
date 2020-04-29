const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;



module.exports = client => {
  console.log('[------------] CODE EMING [-------------]');
  console.log(`${client.guilds.size} adet sunucuya hizmet veriyor`);
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('[------------] CODE EMING [-------------]'); 
  client.user.setStatus("watching");
   var oyun = [
        prefix+"yardım",
        "Squax.exe",
        "🔸 Instagram: squax.exe",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/lifeturk");
        }, 2 * 2500);
}
