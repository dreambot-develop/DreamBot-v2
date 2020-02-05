//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        let bk = require('../botconfig.json');
        let uadmin = bot.profile.fetch(`admin_${message.author.id}`);
        if (uadmin != 1) return;
        let embed = new Discord.RichEmbed()
            .setTitle('**Добавление**')
            .setFooter('Пригласить бота на сервер: d!invite', message.author.avatarURL)
            .setColor('#e22216');

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let res = args.slice(1).join(" ");

        if (!args[0]) { embed.setDescription(`**Укажите пользователя**\n*Пример ${bk.prefix}gadd @user 500*`); return bot.send(embed); };
        if (!rUser) { embed.setDescription('**Данный пользователь не найден**'); return bot.send(embed); }
        if (!res) { embed.setDescription(`**Укажите Число**\n*Пример ${bk.prefix}gadd @user 500*`); return bot.send(embed); };
        if (!isNumeric(res)) { embed.setDescription(`**Укажите число правильно**\n*Пример ${bk.prefix}gadd @user 500*`); return bot.send(embed); };
        bot.profile.add(`coins_${rUser.id}`, Math.floor(parseInt(res)));
        let coins = bot.profile.fetch(`coins_${rUser.id}`);
        if (coins === null) bot.profile.set(`coins_${rUser.id}`, 1 + Math.floor(parseInt(res)));

        let bembed = new Discord.RichEmbed()
            .setDescription("**Добавление**")
            .setColor('#10e250')
            .addField(`Вы добавили ${rUser.user.tag} ${res} глобальных монеток!`, `Его баланс составляет ${coins}`)
            .setFooter('Пригласить бота на сервер: d!invite', message.author.avatarURL);

        bot.send(bembed);
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
    name: "gadd",
    aliases: ["гдобавить"]
};