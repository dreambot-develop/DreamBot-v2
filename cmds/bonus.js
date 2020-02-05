//Завершено

const Discord = module.require("discord.js");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.bonus + '`');
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

        let time = bot.profile.fetch(`bonustime_${message.author.id}`);
        let s = ms(((bot.cd / 60) / 1000) - (Date.now() - time), { long: true });
        let wrong = new Discord.RichEmbed()
            .setColor('#ee281f')
            .setDescription(`**${message.author.tag}** ${msgs[0]} **${s.minutes} minutes ${s.seconds} seconds**`)
        if (time > Date.now()) return bot.send(wrong)

        let add = Date.now() + ((bot.cd * 60) * 1000);
        let mh;
        let cd;

        if (bot.cd > 60) { mh = ' hours'; cd = (bot.cd / 60) } else { mh = ' minutes'; cd = bot.cd };

        let embed = new Discord.RichEmbed()
            .setColor('#77dd77')
            .setDescription(`${msgs[1]}${cd}${mh}`);

        bot.send(embed);

        bot.profile.add(`coins_${message.author.id}`, bk.bonus);
        bot.profile.set(`bonustime_${message.author.id}`, add);
        bot.lprofile.add(`coins_${message.author.id}_${message.guild.id}`, bk.bonus);
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
    };

};
module.exports.help = {
    name: "bonus",
    aliases: ["b", 'бонус', '$']
};