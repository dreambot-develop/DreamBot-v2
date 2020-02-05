const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Укажите баг").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#ff0f00")
   
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`[${message.guild.name}](${Invite.url})`)
   .setTitle("Сервер:")
   .addField("Отправитель", Sender, true)
   .addField("ID отправителя: ", Sender.id, true)
   .addField("Баг: ", sayMessage)
   .setTimestamp()

    bot.users.get("587697798628114442").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Баг успешно отправлен!")
    .addField("Запрошено", Sender)
    .addField("Баг: ", sayMessage)
    .setFooter("Мы рассмотрим вашу проблему")

    message.channel.send(embed);


      }
module.exports.help = {
    name: "bug",
    aliases: ["баг"]
}