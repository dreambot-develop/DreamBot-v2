const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    try {
        if (message.channel.nsfw == false) return message.reply ('Использование 18+ команд только в nsfw чатах');
        let user = kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!user) return bot.sendErrEmbed(new Discord.RichEmbed(), 'Укажите пользователя', true, message)
        const { body } = await superagent
            .get("https://nekos.life/api/v2/img/kuni");
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setTitle(`${message.author.username} 😏 ${user.user.tag}`)
            .setImage(body.url)
        message.channel.send(embed)
    } catch (err) {
        bot.logsErr(err)
    }
};



module.exports.help = {
    name: 'kuni',
    aliases: ['куни'],
    description: 'Сделает куни пользователю (Стоимость 100 бананов) ',
    usages: { '!kuni': 'NSFW NSWF NSFW' },
    category: "18+"
}; 