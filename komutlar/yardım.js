const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const yardım = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`SQUAX`, client.user.avatarURL) 
      .setDescription('**| [discord](https://discord.gg/UTmpYsW)**')
.setThumbnail(client.user.avatarURL)
      .addField('» Müzik ', '`çal`, `devam`, `durdur`, `geç`, ')
      .addField('» Kullanıcı ', '`davet`, `rol-bilgi`, `avatar`')
      .addField('» Sahip ', '`reboot`, `s`')
      .addField('» Eğlence ', "`8ball , " + "ara155 , " + "hacked , "  + "çekiç , " + "stresçarkı`")
      .addField('» Ekstra Komutları', "`davet ," + "doviz , " + "espiri , " + "sayıtahmin`")
      .addField('» Genel Komutları', "`avatar , " + "havadurumu , " + "istatistik , " + "kullanıcıbilgim , " + "ping  " + "server-icon , ")
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(yardım).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: '',
      description: 'Squax',
};