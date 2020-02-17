//Завершено

const Discord = module.require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    try {

        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let rekl = eval('`' + lang.rekl + '`');
        let embed = new Discord.RichEmbed()
            .setTitle("Hi everyone")
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL);
        let fetched = bot.active.get(message.guild.id);

        if (!fetched) { embed.setDescription('**Треков не обнаружено** | **No songsdfg**'); return bot.send(embed) }

        let queue = fetched.queue;
        let nowPlaying = queue[0];
        let validate = await ytdl.validateURL(args[0]);
        let data = bot.active.get(message.guild.id) || {};
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.play + '`');
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
        let resp = `${msgs[1]}`

        for (var i = 1; i < queue.length; i++) {
            resp += `${msgs[2]}`
        }
        const bembed = new Discord.RichEmbed()
            .setTitle("**I'm love you**")
            .setColor("#6767e0")
            .addField('**Очередь** | **Queue**', resp)
            .setFooter(rekl, message.author.avatarURL);
        bot.send(bembed);

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
    name: "queue",
    aliases: ["очередь", 'играет', 'чтоиграет']
};