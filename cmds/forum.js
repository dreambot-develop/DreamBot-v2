//Завершено && Требует дополнения

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.bug + '`');
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
        let uadmin = bot.profile.fetch(`admin_${message.author.id}`);
        let embed = new Discord.RichEmbed()
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL);
        if (uadmin != 1) return;
        let ops = args.join(' ')
        if (!ops) return;

        let admin = bot.users.get(bk.admin);
        admin.send(`**${message.author.tag} | ${message.author.id}**\n\n**${message.guild.name} | ${message.guild.id}**\n\n${ops}`);
        embed.setTimestamp();
        embed.setColor('#fcd544')
        embed.addField(`${message.author.tag}`, `Успешно! Ожидайте активации форума`)

        bot.send(embed);
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`Ошибка вы не указали почту  ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.message.channel.send
        console.log(err.stack);
    }

};
module.exports.help = {
    name: "forum",
    aliases: ['форум']
};