//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        let acoins = bot.lprofile.fetch(`coins_${message.author.id}_${message.guild.id}`);
        let res = args.slice(1).join(" ");
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let embed = new Discord.RichEmbed()
            .setTitle(`**Pay**`)
            .setFooter(rekl, message.author.avatarURL)
            .setColor('#e22216');
        if (!rUser) { embed.setDescription(`${noUser}`); return bot.send(embed); }
        let evaled = eval('`' + lang.pay + '`');
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


        if (!args[0]) { embed.setDescription(`**${noUser}**\n${msgs[0]}`); return bot.send(embed); };
        if (!res) { embed.setDescription(`${msgs[0]}`); return bot.send(embed); };
        if (!isNumeric(Math.floor(parseInt(res)))) { embed.setDescription(`${msgs[0]}`); return bot.send(embed); };
        if (res <= 0) { embed.setDescription(`${msgs[1]}`); return bot.send(embed); };
        if (rUser.id == message.author.id) { embed.setDescription(`${msgs[2]}`); return bot.send(embed); };
        if (res > acoins) { embed.setDescription(`${msgs[3]}`); return bot.send(embed); };
        bot.lprofile.subtract(`coins_${message.author.id}_${message.guild.id}`, Math.floor(parseInt(res)))
        bot.lprofile.add(`coins_${rUser.id}_${message.guild.id}`, Math.floor(parseInt(res)));
        let coins = bot.lprofile.fetch(`coins_${rUser.id}_${message.guild.id}`);
        if (coins === null) bot.lprofile.set(`coins_${rUser.id}_${message.guild.id}`, 1 + Math.floor(parseInt(res)));

        let bembed = new Discord.RichEmbed()
            .setDescription("**iPay**")
            .setColor('#10e250')
            .addField(`${msgs[4]}`, `${hBal} ${coins}`)
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
    name: "pay",
    aliases: ['передать']
};