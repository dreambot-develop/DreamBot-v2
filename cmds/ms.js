//Завершено

const Minesweeper = require('discord.js-minesweeper')

exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let evaled = eval('`' + lang.ms + '`');
    let rekl = eval('`' + lang.rekl + '`');
    let msgs = evaled.split('<>');
    const minesweeper = new Minesweeper();
    bot.send(`${msgs[0]}!\n${minesweeper.start()}`);

}
exports.help = {
    name: 'ms',
    aliases: ["сапер", 'взорвать', 'теракт', 'minesweeper']
}