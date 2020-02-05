//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.skip + '`');
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
        let x = Math.floor(args[0] - 1);
        let embed = new Discord.RichEmbed()
            .setTitle("**Hello world**")
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL);
        let fetched = bot.active.get(message.guild.id);

        if (!fetched) { embed.setDescription('**Треков не обнаружено** | **No songs**'); return bot.send(embed) }
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) { embed.setDescription(msgs[0]); return bot.send(embed); }

        let userCount = message.member.voiceChannel.members.size;
        let required = Math.ceil(userCount / 2)

        if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
        if (fetched.queue[0].voteSkips.includes(message.member.id)) { embed.setDescription(`${msgs} ${fetched.queue[0].voteSkips.length}/${required}**`); return bot.send(embed); }

        fetched.queue[0].voteSkips.push(message.member.id);

        bot.active.set(message.guild.id, fetched);

        if (fetched.queue[0].voteSkips.length >= required) {
            embed.setDescription(msgs[2]);
            bot.send(embed);

            return fetched.dispatcher.emit('end');
        }
        embed.setDescription(`${msgs[1]} ${fetched.queue[0].voteSkips.length}/${required}**`);
        return bot.send(embed);
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
    name: "skip",
    aliases: ["пропуск", 'скип', 'хуита', 'пропустить']
};