const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let config = require('../botconfig.json')
    let prefix = config.prefix;
    try {
        let emb = new Discord.RichEmbed()
            .setColor('#ff0033')
            .setDescription(`:flag_ru: Используйте: ${prefix}lang ru\n:flag_gb: Use ${prefix}lang en`)
            if(!message.member.hasPermission('ADMINISTRATOR')){emb.setDescription('Вам нужны права администратора\nYou need administrator rights');return bot.send(emb)};
        if (!args[0]) bot.send(emb)
        if (args[0].toLowerCase() == 'ru') {
            bot.guild.set(`lang_${message.guild.id}`, 'ru');
            emb.setDescription('Теперь бот будет работать на **Русском** языке')
            return bot.send(emb);
        } else if (args[0].toLowerCase() == 'en') {
            bot.guild.set(`lang_${message.guild.id}`, 'en');
            emb.setDescription('Now the bot will work in **English** language')
            return bot.send(emb);
        } else {
            bot.send(emb)
        }



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
    name: "lang",
    aliases: ["langue", 'яз', 'язык']
};