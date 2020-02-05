const { RichEmbed } = require("discord.js")
const moment = require("moment");

module.exports.run = async(bot, message, args, prefix, clr) => {
  if(!message.content.startsWith(prefix)) return
    
    const status = {
        online: "Онлайн",
        idle: "Нет на месте",
        dnd: "Не беспокоить",
        offline: "Оффлайн"
    };

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author

     let game
      if (argsUser.presence.game.type == 0) game = `Играет в **${argsUser.presence.game.name}**`
     else if (argsUser.presence.game.type == 1) game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url})`
     else if (argsUser.presence.game.type == 2) game = `Слушает **${argsUser.presence.game.name}**`
     else if (argsUser.presence.game.type == 3) game = `Смотрит **${argsUser.presence.game.name}**`

        let embed = new RichEmbed()
        .setColor("RANDOM")
        .setAuthor(argsUser.tag)
        .addField("Ник:", `\`${argsUser.username}\``, true)
        .addField("Тэг:", `\`${argsUser.discriminator}\``, true)
        .addField("ID:", `\`${argsUser.id}\``, true)
        .addField("Статус:", status[argsUser.presence.status], true)
        .addField("Активность:", `\`${argsUser.presence.game || "Нету"}\``, true)
        .addField("Бот?", `\`${argsUser.bot ? 'Да' : 'Нет'}\``, true)
        .addField("Присоединился:", `\`${moment.utc(argsUser.joinedAt).format(`DD.MM.YYYY  |  HH:mm:ss `)}\``, true)
        .addField("Создан:", `\`${moment.utc(argsUser.createdAt).format(`DD.MM.YYYY  |  HH:mm:ss `)}\`` , true)
        //.addField(`Роли`, message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => `<@&${role.id}>`).join(', ') || 'Не имеет', true)
        //.setFooter(`ку!`, bot.user.displayAvatarURL)
        .setThumbnail(argsUser.avatarURL);
    await message.channel.send(embed) 
      }

module.exports.help = {
    name: "ui",
  aliases: ['userinfo', 'useri']
}
