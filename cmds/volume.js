//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let fetched = bot.active.get(message.guild.id);
        let embed = new Discord.RichEmbed()
            .setTitle("**Музыка - this is russian**")
            .setColor('#e22216');
        if (!fetched) { embed.setDescription('**Треков не обнаружено | No music**'); return bot.send(embed); };
        let bk = require('../botconfig.json');
        let getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]);
        let roles = bot.guild.fetch(`shop_${message.guild.id}`);
        let prices = bot.guild.fetch(`prices_${message.guild.id}`);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.volume + '`');
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


        if (message.member.voiceChannel !== message.guild.me.voiceChannel) { embed.setDescription('**Вы не можете управлять музыкой из другого канала**'); return bot.send(embed); };
        if (isNaN(args[0])) { embed.setDescription(noNum); return bot.send(embed); }

        fetched.dispatcher.setVolume(args[0] / 100);

        embed.setColor('fae7b5'); embed.setDescription(msgs[0]); return bot.send(embed);


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
    name: "volume",
    aliases: ["громкость"]
};