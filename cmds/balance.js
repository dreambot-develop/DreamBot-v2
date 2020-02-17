const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.profile + '`');
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
        let noMoney = lang.noMoney;

        let us = message.mentions.users.first() || message.author;
        let coins = bot.profile.fetch(`coins_${us.id}`);
        let lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);
        if (coins === null) await bot.profile.set(`coins_${us.id}`, 0);
        if (lcoins === null) await bot.lprofile.set(`coins_${us.id}_${message.guild.id}`, 0);
        coins = bot.profile.fetch(`coins_${us.id}`);
        lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);

       
     
        let embed = new Discord.RichEmbed()
            .setTitle(` ${msgs[14]} **${us.tag}**`)
            //.setThumbnail('https://discordemoji.com/assets/emoji/1438_aSpookyDance.gif')
            .setColor(`#00dbff`)
            .addField(`:moneybag: ${msgs[1]}`, `\`${coins}\``,true) //ваш банк
            .addField(`:money_with_wings: ${msgs[2]}`, `\`${lcoins} \``,true)// ваш кошелёк
            .addField(`💵 Поддержите автора и получите бонусы и монетки)`,`[Нажми сюда пж](https://boosty.to/dreambotdonate)`)
            .setFooter(rekl, message.author.avatarURL);
            // if (admin == 1) embed.addField(`:spy: Вы администратор бота`, `А другие нет)`, true)
        bot.send(embed);
   
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    };

};
module.exports.help = {
    name: "balance",
    aliases: ["bal", '$']
};