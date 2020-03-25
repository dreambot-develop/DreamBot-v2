const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    try {
        const { body } = await superagent
            .get("https://nekos.life/api/v2/img/neko");
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setImage(body.url)
        message.channel.send(embed)
    } catch (err) {
        bot.logsErr(err)
    }
};



module.exports.help = {
    name: 'neko',
    aliases: ['дефкасушами', 'неко', 'нэко'],
    description: 'Получает фотографию девочки с ушками',
    usages: { '!neko': 'Показывает вам эту деффку' },
    category: "Развлечения"
}; 