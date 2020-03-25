const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

    try {
        if (message.channel.nsfw == false) return message.reply ('Использование 18+ команд только в nsfw чатах');
        const { body } = await superagent
            .get("https://nekos.life/api/v2/img/anal");
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setTitle(`${message.author.username}`)
            .setImage(body.url)
        message.channel.send(embed)
    } catch (err) {
        bot.logsErr(err)
    }
};



module.exports.help = {
    name: 'anal',
    aliases: ['анал', 'жопа', 'ачко']
}; 