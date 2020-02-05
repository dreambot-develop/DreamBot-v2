//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let otherlang = require(`../lang_${bot.lang}.json`);
    let olang = otherlang.casino.split('<>');
    let evaled = eval('`' + lang.ping + '`');
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
        .setDescription(msgs[0])
        .setColor('#ff8148')
        .addField(`Pffagarvvbw2q5td`, `**${bot.ping}**`)
        .setFooter(rekl, message.author.avatarURL)
        .setThumbnail('https://discordemoji.com/assets/emoji/2366_Loading_Pixels.gif');
    bot.send(emb);
};
module.exports.help = {
    name: "ping",
    aliases: ["пинг", 'лаги']
};