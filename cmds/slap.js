//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let rUser = message.guild.member(message.mentions.users.first()) || message.author;
    if (!rUser) return

        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.slap + '`');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let reaso = lang.reason;
        let reason = reaso.split('<>')
        let msgs = evaled.split('<>');
        let actions = lang.actions.split('<>')
        let admin = lang.admin.split('<>')
        let noMoney = lang.noMoney;
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} ${msgs[0]} ${rUser}`)
        .setImage(`https://media1.tenor.com/images/0720ffb69ab479d3a00f2d4ac7e0510c/tenor.gif?itemid=10422113`)
        .setColor('#f646ff')
        .setFooter(rekl)
    bot.send(emb)
};
module.exports.help = {
    name: "slap",
    aliases: ["ударить", 'шлепнуть', 'шлеп']
};