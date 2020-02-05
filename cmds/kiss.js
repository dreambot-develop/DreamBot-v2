//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let rekl = eval('`' + lang.rekl + '`');
    let evaled = eval('`' + lang.kiss + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let reaso = lang.reason;
    let zreason = reaso.split('<>')
    let msgs = evaled.split('<>');
    let actions = lang.actions.split('<>')
    let admin = lang.admin.split('<>')
    let noMoney = lang.noMoney;
    let rUser = message.guild.member(message.mentions.users.first()) || message.author;
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} ${msgs[0]} ${rUser}`)
        .setColor('#f646ff')
        .setImage(`https://media1.tenor.com/images/45e529c116a1758fd09bdb27e2172eca/tenor.gif?itemid=11674749`)
        .setFooter(rekl)
    bot.send(emb)
};
module.exports.help = {
    name: "kiss",
    aliases: ["поцеловать", 'расцеловать', 'уцеловать', 'целовать']
};