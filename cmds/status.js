const Discord = require("discord.js");

module.exports.run = async(bot, message, args, prefix, clr) => {
  if(!message.content.startsWith(prefix)) return
    message.delete()
    let statuses = {
        online: "Онлайн",
        idle: "Нет на месте",
        dnd: "Не беспокоить",
        invisble: "Оффлайн"
    }
   if(message.author.id != (config.owner)) return message.reply(" Ты не владелец бота.").then(m => m.delete(5000));

    let status = args[0]
    if(!status) return message.reply("Укажите тип статуса").then(m => m.delete(5000));
    bot.user.setStatus(status)
    message.channel.send("Статус бота установлен на:**"+statuses[status]+"**.").then(m => m.delete(5000));
}
module.exports.help = {
	name: "status",
    aliases: ["ванга"]
}