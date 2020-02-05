//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let res = args.slice(1).join(" ");
        let lang = require(`../lang_${bot.lang}.json`);
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let embed = new Discord.RichEmbed()
            .setTitle('Set')
            .setFooter(rekl, message.author.avatarURL)
            .setColor('#e22216');
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        let coins = bot.lprofile.fetch(`coins_${rUser.id}_${rUser.guild.id}`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.set + '`');
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
        if (!message.member.hasPermission("ADMINISTRATOR")) { embed.setDescription('У вас нет прав'); return bot.send(embed); }


        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); };
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        if (!res) { embed.setDescription(noNum); return bot.send(embed); };
        if (!isNumeric(res)) { embed.setDescription(noNum); return bot.send(embed); };
        bot.lprofile.set(`coins_${rUser.id}_${rUser.guild.id}`, Math.floor(parseInt(res)));
        if (coins === null) bot.lprofile.set(`coins_${rUser.id}_${rUser.guild.id}`, 1 + Math.floor(parseInt(res)));

        let bembed = new Discord.RichEmbed()
            .setTitle(msgs[0])
            .setColor('#10e250')
            .addField(msgs[1])
            .setFooter(rekl, message.author.avatarURL);

        bot.send(bembed);
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
    name: "set",
    aliases: ["установить"]
};