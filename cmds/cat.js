//Завершено

const Discord = require('discord.js')
const sa = require('superagent')

exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let rekl = eval('`' + lang.rekl + '`');
    if (args) if (args[0] == 'help') return bot.send(`**cat** - Рандомный котик) (Author: Offsis)\n**Использование:** ${bk.prefix}cat`);
    var { body } = await sa.get(`http://aws.random.cat//meow`)
    var cat = new Discord.RichEmbed()
        .setColor('#fadbc8')
        .setImage(body.file)
        .setFooter(rekl)
    bot.send(cat)
}
exports.help = {
    name: 'cat',
    aliases: ["кошка", 'кот']
}