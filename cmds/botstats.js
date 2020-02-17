//Завершено

const { version } = require(`discord.js`);
const moment = require(`moment`);
require(`moment-duration-format`);
const Discord = require(`discord.js`)
module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let evaled = eval('`' + lang.botstats + '`');
    let rekl = eval('`' + lang.rekl + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let reaso = lang.reason;
    let reason = reaso.split('<>')
    let msgs = evaled.split('<>');
    let actions = lang.actions.split('<>')
    let admin = lang.admin.split('<>')
    const duration = moment.duration(bot.uptime).format(` D [days], H [hrs], m [mins], s [secs]`);

    const embed = new Discord.RichEmbed()
        .setAuthor(`Bot stats`)
        .setColor(`#a7f442`)
        .setThumbnail('https://discordemoji.com/assets/emoji/2278_PinkCatSpin.gif')
        .setTimestamp()
        .addField(`⭕ | ${msgs[0]}`, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
        .addField(`🕑 | ${msgs[7]}`, `${duration}`, true)
        .addField(`👥 | ${msgs[1]}`, `${bot.users.size.toLocaleString()}`, true)
        .addField(`🌐 | ${msgs[2]}`, `${bot.guilds.size.toLocaleString()}`, true)
        .addField(`🗨 | ${msgs[3]}`, `${bot.channels.size.toLocaleString()}`, true)
        .addField(`⚙ | ${msgs[4]}`, `${bot.commands.size.toLocaleString()}`, true)
        .addField(`🕵 | ${msgs[5]}`, bot.botstats.fetch(`viewMessages`), true)
        .addField(`📩 | ${msgs[6]}`, bot.botstats.fetch(`sendMessages`), true)
        .addField(`💡 | Discord.js`, `v${version}`, true)
        .addField(`〽 | ${msgs[8]}`, `${Math.round(bot.ping)}ms.`)//Задержка бота с DiscordAPI
        .addField(`🏧| ${msgs[9]}`,`[netangels.ru](https://netangels.ru)`,true)
        .addField(`⚙️| ${msgs[10]}`, `[${msgs[11]}](https://dreambot.freshstatus.io/)`, true)
        .addField(`💵 Поддержите автора и получите бонусы)`,`[Нажми сюда пж](https://boosty.to/dreambotdonate)`)
        .setFooter(rekl, message.author.avatarURL);

    bot.send(embed);
};

module.exports.help = {
    name: `botstats`,
    aliases: [`bs`, 'статистикабота', 'бс']
}
