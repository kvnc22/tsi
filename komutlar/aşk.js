const Discord = require('discord.js');
const CodEmingDBL = require('dblapi.js')





exports.run = async (client,message, args) => { 
  const CodEmingdbl = new CodEmingDBL('DBL tokeninizi Giriniz! ', client)
const client2 = new Discord.Client();
  CodEmingdbl.hasVoted(message.author.id).then(CodEmingvoted => {
      if(CodEmingvoted) {
let member = message.guild.member(
    message.mentions.users.array()[0] || message.guild.members.get(args[0])
  );
  let member2 = message.guild.member(
    message.mentions.users.array()[1] || message.guild.members.get(args[1])
  );
  var s = message.author;
  if (member2) {
    var s = member2.user;
  }
  if (!member) {
    const yasin = new Discord.RichEmbed()
      .setDescription(`<a:yanlis:633997777319493634> Bir Kişi Etiketlemelisin.`)
      .setAuthor(" Hata Var!")
      .setColor("RED")
      .setTimestamp();
    message.channel.send({ yasin });
    return;
  }
  var CodEmingask = Math.floor(Math.random() * 101);
  var kalp = "";
  var akalp = "";
  if (Math.floor(Math.round(CodEmingask / 10) * 10) >= 10) {
    var c = 0;
    for (var i = 0; i < Math.floor(Math.round(CodEmingask / 10)); i++) {
      kalp += "¦❤️¦";
      c++;
    }
    for (var x = c; x < 10; x++) {
      akalp += `¦🖤¦`;
    }
  } else {
    var kalp = "🖤¦";
    var akalp = "🖤¦🖤¦🖤¦🖤¦🖤¦🖤¦🖤¦🖤¦🖤";
  }
  var yorum = `<a:galp:634431655116931089> La Ne Duruyon Kaçır Hemen Kaçır Evlenme Dairesine Koş koş! <a:galp:634431655116931089>`;
  if (CodEmingask < 80) {
    var yorum = "İkiniz'de Birbiriniz İçin Yaratılmışsınız.♥️";
  }
  if (CodEmingask < 60) {
    var yorum = "Hadi Azcık Zorla Be.";
  }
  if (CodEmingask < 40) {
    var yorum =
      "Hadi Be... Sen Seviyorsun Ama Karşıdaki Seni Pek Sevmiyor Gibi.🖤";
  }
  if (CodEmingask < 20) {
    var yorum = "Bunu Boşver Çirkin Bu. Sen Yeni Bir Eş Bul.";
  }
  const baroo = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} İle ${s.tag} Arasındaki Aşk Sonucu.`)
    .setDescription(`Aşk Yüzdesi: ${CodEmingask}\n${kalp}${akalp}\n\n${yorum}`)
    .setColor("RANDOM")
    .setTimestamp();
  
const selin = new Discord.RichEmbed()
.setAuthor(`${member.user.tag} ♥️ ${s.tag}`)
.setDescription('<a:loading:645209611040980994>|**Aşkınızı Ölçüyorum...**')
.setColor("PURPLE")

message.channel.send(selin).then(codeming => {
setTimeout(() => {
codeming.edit(baroo)
}, 10000)

})
 
        } else {
        message.channel.send(`Yav Kardeşim Hem Oy Vermiyon Hemde Aşk Komutunu Kullanıyorsun https://discordbots.org/bot/${client.user.id}/vote sitesinden bota oy vermen gerekiyordu. Eğer oy verdiysen onaylanmasını bekle, birkaç dakika sürebilir.`)
      }
  });


} 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aşk","ask"],
  permLevel: 0,
  kategori: "eğlence"
};
exports.help = {
  name: "aşk",
  description: "İki Kullanıcı Arasındaki Aşkı Ölçer.",
  usage: "aşk [@Kullanıcı]"
};