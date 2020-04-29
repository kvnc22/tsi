const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(':no_entry:  | Bunun İçin "Üyeleri Engelle" Yetkisine Sahip Olan Bir Tagınız Bulunmalıdır.');
  if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setAuthor('Uygulanan Komut: Slowmode')
                .setDescription(`Yavaş-Mod Ayarlamak İçin: .yavaş-mod {süre}`)
                .setColor('RANDOM')
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.RichEmbed().setDescription(`:name_badge: | 120'den Fazla Yavaş-Mod Açamazsın!`).setAuthor('Uygulanan (uygulanamayan) Komut: Slowmode').setColor('RANDOM'));
}
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: Yavaş Mod  **${limit}** saniye olarak ayarlandı!`).setAuthor('Uygulanan Komut: Slowmode').setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Slowmode Ayarlar',
  usage: 'yavaş-mod',
};