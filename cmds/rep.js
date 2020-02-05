//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        let bk = require('../botconfig.json');
        if (args) if (args[0] == 'help') return bot.send(`**rep** - Репутация в боте (Выдается создателем бота)\n**Использование:** ${bk.prefix}rep @USER SUM`);
        let uadmin = bot.profile.fetch(`admin_${message.author.id}`);
        if (uadmin != 1) return;
        let embed = new Discord.RichEmbed()
            .setTitle('**Репутация**')
            .setFooter('Пригласить бота на сервер: d!invite', message.author.avatarURL)
            .setColor('#e22216');

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let res = args.slice(1).join(" ");

        if (!args[0]) { embed.setDescription(`**Укажите пользователя**\n*Пример ${bk.prefix}rep @user 2*`); return bot.send(embed); };
        if (!rUser) { embed.setDescription('**Данный пользователь не найден**'); return bot.send(embed); }
        if (!res) { embed.setDescription(`**Укажите Число**\n*Пример ${bk.prefix}rep @user 2**`); return bot.send(embed); };
        if (!isNumeric(res)) { embed.setDescription(`**Укажите число правильно**\n*Пример ${bk.prefix}rep @user 2*`); return bot.send(embed); };
        bot.profile.add(`rep_${rUser.id}`, Math.floor(parseInt(res)));
        let rep = bot.profile.fetch(`rep_${rUser.id}`);
        if (rep === null) bot.profile.set(`rep_${rUser.id}`, Math.floor(parseInt(res)));

        let bembed = new Discord.RichEmbed()
            .setTitle("**Репутация**")
            .setColor('#10e250')
            .setDescription(`${rUser} Вы заслужили уважение от создателя бота!\nВсего репутации: **${rep}**`)
            .setFooter('Пригласить бота на сервер: d!invite', message.author.avatarURL);

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
    name: "rep",
    aliases: ["реп"]
};