//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    try {
        let rand = Math.floor(Math.random() * (100 - 0) + 0)
        let rand2 = Math.floor(Math.random() * (100 - 10) + 10)
        let coins = bot.profile.fetch(`coins_${message.author.id}`);
        let bal = coins
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.groll + '`');
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
            .setDescription(msgs[0])
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL)
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        if (!args[0] || !isNumeric(Math.floor(parseInt(args[0])))) { embed.setDescription(olang[3]); return bot.send(embed); }
        if (coins <= Math.floor(parseInt(args[0]))) { embed.setDescription(`${noMoney} **${bal}**`); return bot.send(embed); }
        if (Math.floor(parseInt(args[0])) <= 10) { embed.setDescription(`${olang[2]} 10`); return bot.send(embed); }
        rand2 + 13;
        if (rand2 > 100) rand2 = 100;
        if (rand <= rand2) { embed.setDescription(msgs[2]); bot.profile.subtract(`coins_${message.author.id}`, Math.floor(parseInt(args[0]))); return bot.send(embed); }
        if (rand > rand2) { embed.setColor('#10e250'); embed.setDescription(msgs[3]); bot.send(embed); }
        bot.profile.add(`coins_${message.author.id}`, Math.floor(parseInt(args[0]) * 1.5) - Math.floor(parseInt(args[0])));

    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {
    name: "groll",
    aliases: ["гролл", 'гроль', 'грулетка']
};