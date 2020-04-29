const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel
    .send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Komut giriişi")
        .setDescription(
          "Gerekli Dosyayı Kurmamı Onaylıyormusun ? \n**Uyarı Tüm Odaları Silmeden Kurmayın**"
        )
        .setFooter(
          'Bu eylemi onaylıyorsan "Kur" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'
        )
    )
    .then(() => {
      message.channel
        .awaitMessages(response => response.content === "Kur, kur", {
          max: 1,
          time: 30000,
          errors: ["time"]
        })
        .then(collected => {
          message.guild.createChannel(
            "【🌙】Metin Kanalları【🌙】",
            "category",
            [
              {
                id: message.guild.id
              }
            ]
          );

          message.guild
            .createChannel(`「💬」sohbet`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Metin Kanalları【🌙】"
                )
              )
            );

          message.guild
            .createChannel(`「🔨」bot-komut`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Metin Kanalları【🌙】"
                )
              )
            );

          message.guild.createChannel(
            "【🌙】Önemli Kanallar【🌙】",
            "category",
            [
              {
                id: message.guild.id
              }
            ]
          );

          message.guild
            .createChannel(`「📃」kurallar`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Önemli Kanallar【🌙】"
                )
              )
            );

          message.guild
            .createChannel(`「📢」duyuru`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Önemli Kanallar【🌙】"
                )
              )
            );

          message.guild
            .createChannel(`「🔰」partner`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Önemli Kanallar【🌙】"
                )
              )
            );

          message.guild
            .createChannel(`「🎉」çekiliş`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Önemli Kanallar【🌙】"
                )
              )
            );

          message.guild
            .createChannel(`「📷」görsel-içerik`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【🌙】Önemli Kanallar【🌙】"
                )
              )
            );

          message.guild.createChannel(
            "【⭐】Loxi Kannalları【⭐】",
            "category",
            [
              {
                id: message.guild.id
              }
            ]
          );
          message.guild
            .createChannel(`「🚪」oto-rol`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【⭐】Loxi Kannalları【⭐】"
                )
              )
            );

          message.guild
            .createChannel(`「🌐」mod-log`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【⭐】Loxi Kannalları【⭐】"
                )
              )
            );

          message.guild
            .createChannel(`「✅」sayaç`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【⭐】Loxi Kannalları【⭐】"
                )
              )
            );

          message.guild
            .createChannel(`「👮」tarama`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【⭐】Loxi Kannalları【⭐】"
                )
              )
            );

          message.guild
            .createChannel(`ddos-koruma`)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "【⭐】Loxi Kannalları【⭐】"
                )
              )
            );

          message.channel.send(
            `Gerekli Kanalları Oluşturdum. !!Ekstra Özel Oda Sistemi Aktif !!!`
          );
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur"],
  permLevel: 3
};

exports.help = {
  name: "sunucukur",
  description: " Süper Sunucu Kur",
  usage: "kurar"
};