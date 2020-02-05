//Завершено

const Discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let evaled = eval('`' + lang.avatar + '`');
    let rekl = eval('`' + lang.rekl + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let msgs = evaled.split('<>');
    let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    if (!usr) return bot.send(noUser);
    let embed = new Discord.RichEmbed()        .setColor('#DB9834')
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        .setTitle(`${msgs[0]} ${usr.username}!`)
        .setImage(usr.avatarURL);
    bot.send(embed);
}
module.exports.help = {
    name: "avatar",
    aliases: ['аватар']
}
