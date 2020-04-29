const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  

  //CodEming /Yasin..
  
  if(message.author.id !== "306499839305187329") return message.channels.send('Bu komutu kullanmak için yeterli izne sahip değilsin.')
  
  let kontrol = args[0]
  
  if(!kontrol) return message.channel.send('Bir durum belirtmelisin \n Örnek: `c!duyuru embed // c!duyuru mesaj`')
  let chan = message.channel;
if(args[0] === 'embed') {
  let embed = new Discord.RichEmbed()
  .setTitle('Gönderilecek Metin')
  .setDescription('Gönderilecek metini bulunduğunuz kanala gönderin mesajı `embed` biçiminde göndereceğim.!')
 message.channel.send(embed)
  
  message.channel.awaitMessages(x => {
let embed = new Discord.RichEmbed()
.setTitle('Duyuru!')
.setDescription(x.content)
.setColor('RANDOM')
       client.users.forEach(u => {
u.sendEmbed(embed)
})


return;
    })
}
 //CodEming /Yasin..
          
if(args[0] === 'mesaj') {
   let embed = new Discord.RichEmbed()
  .setTitle('Gönderilecek Metin')
  .setDescription('Gönderilecek metini bulunduğunuz kanala gönderin mesajı `mesaj` biçiminde göndereceğim.!')
 message.channel.send(embed)
  
  message.channel.awaitMessages(x => {

       client.users.forEach(u => {
u.sendEmbed(x.content)
})


return;
    }) 
}

  
  
  //CodEming /Yasin..
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'dm',
  description: 'taslak', 
  usage: 'dm'
};