
const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let uadmin = bot.profile.fetch(`admin_${message.author.id}`);
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let embed = new Discord.RichEmbed()
            .setTitle('**Работа**')
            .setFooter('Пригласить бота на сервер: d!invite', message.author.avatarURL)
            .setColor('RANDOM');
        if (uadmin != 1) return;
        if (!args[0]) { embed.setDescription('Вы не указали пользователя'); return bot.send(embed); }
        if (!rUser) { embed.setDescription('Пользователь не найден'); return bot.send(embed); }
        let userid = rUser.id;
        bot.profile.set(`work_${userid}`,Math.floor(parseInt(args[1]))-1);
        bot.profile.set(`workCooldown_${userid}`,0);
        embed.setDescription(`Вы установили ${rUser} уровень работы **${Math.floor(parseInt(args[1]))}**`);
        bot.send(embed);

    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle('Ошибка')
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`Если ошибка не пропадает обратитесь к ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {
    name: "setwork",
    aliases: ["sw"]
};