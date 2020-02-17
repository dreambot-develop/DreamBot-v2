//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.stop + '`');
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
        let embed = new Discord.RichEmbed()
            .setTitle("**sus**")
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL);
        if (!message.member.voiceChannel) { embed.setDescription(msgs[0]); return bot.send(embed); }
        if (!message.guild.me.voiceChannel) { embed.setDescription(msgs[1]); return bot.send(embed); }
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) { embed.setDescription('**Вы не можете управлять музыкой из другого канала** | **Go to music channel** ya hz'); return bot.send(embed); }

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        embed.setColor('fae7b5'); embed.setDescription(msgs[2]); return bot.send(embed);
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
    name: "stop",
    aliases: ["астанавитесь", 'стоп']
};