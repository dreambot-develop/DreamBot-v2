//Завершено

const Discord = require("discord.js");
const shorten = require('isgd')

module.exports.run = async (bot, message, args) => {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.sh + '`');
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
        let noMoney = lang.noMoney;
    let embed = new Discord.RichEmbed()
            .setTitle(msgs[0])
            .setFooter(rekl, message.author.avatarURL)
            .setColor('#e22216');
    if (!args[0]) { embed.setDescription(msgs[1]); return bot.send(embed); };
    if (!args[1]) {
        shorten.shorten(args[0], function (res) {
            if (res.startsWith('Ошибка:')) { embed.setDescription(msgs[1]); return bot.send(embed); };
            embed.setDescription(`*<${res}>*`);
            embed.setColor('#ff00cc');
            return bot.send(embed);
        })
    } else {
        shorten.custom(args[0], args[1], function (res) {
            if (res.startsWith('Ошибка')) { embed.setDescription(`${res}`); return bot.send(embed); };
            embed.setColor('#ff00cc');
            embed.setDescription(`*<${res}>*`); 
            return bot.send(embed);

        })
    }
}

module.exports.help = {
    name: "sh",
    aliases: ["сократитьссылку", 'вирус']
}