const { version } = require("discord.js");
const moment = require("moment")
require("moment-duration-format");
const os = require('os');
module.exports.run = async (bot,message,args) => {
const duration = moment.duration(bot.uptime).format(" D [дней], H [часа(ов)], m [минут]");
const embed = new Discord.RichEmbed()
.setAuthor(`Информация о боте ${bot.user.username}`, `${bot.user.avatarURL}`)
      .setColor("RANDOM")
    .setThumbnail(`${bot.user.avatarURL}`)
    .setTimestamp()
      .addField('**Основная:** ',`\`\`\`asciidoc\n• Серверов       :: ${bot.guilds.size.toLocaleString()}\n• Участников    :: ${bot.users.size.toLocaleString()}\n• Эмодзи        :: ${bot.emojis.size.toLocaleString()}\n• Кол-во команд :: ${bot.commands.size.toLocaleString()}\`\`\``)
      .addField('**Техническая:** ',`\`\`\`asciidoc\n• Пинг          :: ${bot.ping}мс\n• ОЗУ исп.      :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n• Бот запустился:: ${moment(bot.readyAt+10800000).format(`DD.MM в HH:mm`)}\n• Аптайм бота   :: ${duration}\n• Discord.js    :: v${version}\n• Версия Node   :: ${process.version}\n• Процессор     :: ${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, true)     .setFooter(`${bot.user.username} `, bot.user.avatarURL)
      .addField(`<:github:679016893369286657>| GitHub`, `[Тык](https://github.com/MrLivixx/dreambot-v2)`)
      .addField(`🖥 |Хостин️г`,"[Тык](https://mrlivixx.ml/host)")

    .setTimestamp()
     message.channel.send(embed)
    }
    module.exports.help = {
    name: "stats",
    aliases: ["bss"],
}
// n• Бот запустился:: ${moment(bot.readyAt+10800000).format(`DD.MM в HH:mm`)}\n \n• ОЗУ исп.      :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB • Процессор     :: ${os.cpus().map(i => `${i.model}`)[0]}
