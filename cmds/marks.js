//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.marks + '`');
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
        if (args) if (args[0] == 'help') return bot.send(`**marks** - Значки\n**Использование:** ${bk.prefix}marks`);
        let embed = new Discord.RichEmbed()
            .setDescription(msgs[0])
            .setColor(`RANDOM`)
            .setTitle(`**${message.author.tag}**`)
            .addField(`**Чикибабони ** 🐷 `, msgs[1])
            .addField(`**Like a Boooooss** :unicorn:`, msgs[2])
            .addField(`**Ку ку ёпта** :hear_no_evil:`, msgs[3])
            .addField(`**${msgs[13]}** :newspaper2:`, msgs[4])
            .addField(`**${msgs[14]}** :incoming_envelope:`,msgs[5])
            .addField(`**${msgs[15]}** :dollar:`, msgs[6])
            .addField(`**${msgs[16]}** :yen:`, msgs[7])
            .addField(`**${msgs[17]}** :moneybag:`, msgs[8])
            .addField(`**${msgs[18]}** :credit_card:`, msgs[9])
            .addField(`**${msgs[19]}** :gem:`, msgs[10])
            .addField(`**${msgs[20]}** :wedding:`, msgs[11])
            .addField(`**${msgs[21]}** :gay_pride_flag:`, msgs[12])
            .addField(`**${msgs[22]}** :boom:`, msgs[12])
            .addField(`**Hacker** :spy:`, `${msgs[23]} <@572285950034444298>`)
            .setFooter(rekl);
        bot.send(embed)
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
    name: "marks",
    aliases: ["mks", 'значки', 'зночки', 'марки']
};