const Discord = require('discord.js');
exports.run = (client, message, args) => {

   //CodEming     
  
if (message.channel.name !== '👅╠komut-odası╣👅') {     
if (!message.member.hasPermission("ADMINISTRATOR"))  {
       message.delete()
  var embed = new Discord.RichEmbed()
.setColor("RED")
.setDescription('Yanlış Yer!')
.setThumbnail('')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));
 }
} 
  
  

let kullanıcı2 = message.mentions.members.first()
let kullanıcı = message.guild.member(kullanıcı2)

  let codeming = '.'
if(!codeming) return
  
  if (message.mentions.users.size < 1) return message.reply('dürtücek kişiyi yazmalısın!').catch(console.error);
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  kullanıcı.send(`<@${message.author.id}>`+ " SENİ DÜRTÜYOR !")
  message.reply('Tamam abi hemen 7 kere dürtüyorum')
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dürt',
  description: 'birini dürtersiniz.',
  usage: 'dürt'
};