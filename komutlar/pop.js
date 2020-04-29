const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");
const ayarlar = "./ayarlar.json";
const prefix = ayarlar.prefix;



var pop = "http://80.radyopop.com/stream/1/";





exports.run = function (bot, message, args) {
		let mesaj = args.slice(0).join(' ');
if(!mesaj) {
	message.reply("**7/24** Pop Oynatılıyor")
}		
    if (!message.member.voiceChannel) return message.reply("Pop Komutunu Kullanabilmek İçin Lütfen Sesli Bir Kanala Giriş Yapınız.");

		    if (mesaj === "") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(pop);
            return message.channel.send();
        }));
        return;
    } 
	
	if (mesaj === "bitir") {
							const voiceChannel = message.member.voiceChannel;
    message.reply("Bot Sesli Kanaldan Ayrıldı")

			voiceChannel.leave()
	}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};
exports.help = {
    name: "pop",
    description: "7/24 Pop Şarkı Çalar",
    usage: "pop"
};