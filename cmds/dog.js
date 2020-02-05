//Завершено

const Discord = require('discord.js')
const sa = require('superagent')

exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let rekl = eval('`' + lang.rekl + '`');
    if (args) if (args[0] == 'help') return bot.send(`**dog** - Рандомный песик (Author: Offsis)\n**Использование:** ${bk.prefix}dog`);
    var { body } = await sa.get(`https://random.dog/woof.json`)
    var dog = new Discord.RichEmbed()
        .setColor('#fadbc8')
        .setImage(body.url)
        .setFooter(rekl)
    bot.send(dog)
}
exports.help = {
    name: 'dog',
    aliases: ["собака", 'пес', 'щенок']
}