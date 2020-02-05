//Завершено

const Discord = require('discord.js')
const sa = require('superagent')

exports.run = async (client, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${client.lang}.json`);
    let rekl = eval('`' + lang.rekl + '`');
    if (args) if (args[0] == 'help') return client.send(`**fox** - Рандомная лисичка (Author: Offsis)\n**Использование:** ${bk.prefix}fox`);
    var { body } = await sa.get(`https://randomfox.ca/floof/`)
    var fox = new Discord.RichEmbed()
        .setColor('#fadbc8')
        .setImage(body.image)
        .setFooter(rekl)
    client.send(fox)
}
exports.help = {
    name: 'fox',
    aliases: ["карамеяль","карамелька","caramel", "лиса", "лис", "лисичка", 'лисенок', 'лисонька', 'лисы', 'лисеночки']
}
