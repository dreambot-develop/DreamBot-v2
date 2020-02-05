//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.roll + '`');
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
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        let max;
        let min;
        if (!args[0] || !isNumeric(args[0])) max = 100; else { max = args[0] };
        if (!args[1] || !isNumeric(args[1])) min = 1; else {min = args[1] };
        let rand = Math.floor(Math.random() * (max - min) + min)

        let embed = new Discord.RichEmbed()
            .setDescription(msgs[0])
            .setColor('#10e250')
            .addField(msgs[1], rand)
            .setFooter(rekl, message.author.avatarURL)
        bot.send(embed);

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
    name: "roll",
    aliases: ["ролл", 'роль', 'рулетка', 'случайноечисло']
};