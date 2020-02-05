const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.add + '`');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let msgs = evaled.split('<>');
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setFooter(rekl, message.author.avatarURL)
            .setColor('#e22216');
        if (!message.member.hasPermission("ADMINISTRATOR")) { embed.setDescription(noPerm); return bot.send(embed); }

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let res = args.slice(1).join(" ");

        if (!args[0]) { embed.setColor('#d82d08');embed.setDescription(`**${noUser}**\n*${bk.prefix}add @user 500*`); return bot.send(embed); };
        if (!rUser) { embed.setColor('#d82d08');embed.setDescription(noUser); return bot.send(embed); }
        if (!res) { embed.setColor('#d82d08');embed.setDescription(`**${noNum}**\n*${bk.prefix}add @user 500*`); return bot.send(embed); };
        if (!isNumeric(res)) { embed.setColor('#d82d08');embed.setDescription(`**${noNum}**\n*${bk.prefix}add @user 500*`); return bot.send(embed); };
        bot.lprofile.add(`coins_${rUser.id}_${message.guild.id}`, Math.floor(parseInt(res)));
        let coins = bot.lprofile.fetch(`coins_${rUser.id}_${message.guild.id}`);
        if (coins === null) bot.lprofile.set(`coins_${rUser.id}_${message.guild.id}`, 1 + Math.floor(parseInt(res)));

        let bembed = new Discord.RichEmbed()
            .setDescription(`**${msgs[0]}**`)
            .setColor('#10e250')
            .addField(`${msgs[1]} ${rUser.user.tag} ${res} $`, `${hBal} ${coins}`)
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
    name: "add",
    aliases: ['добавить']
};