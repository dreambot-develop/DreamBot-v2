//Завершено

const Discord = module.require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    try {
        let data = bot.active.get(message.guild.id) || {};
        let bk = require('../botconfig.json');
        let lang = require(`../lang_ru.json`);
        let otherlang = require(`../lang_en.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.play + '`');
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
            .setTitle("**Hello World**")
            .setColor('#e22216')
            .setFooter(rekl, message.author.avatarURL);
        if (!message.member.voiceChannel) { embed.setDescription(msgs[0]); return bot.send(embed) }
        if (!args[0]) { embed.setDescription(msgs[1]); return bot.send(embed) }
        let validate = await ytdl.validateURL(args[0]);
        if (!validate) {
            let commandFile = require('./search.js');
            return commandFile.run(bot, message, args);
        }


        if (!data.connection) data.connection = await message.member.voiceChannel.join();
        if (!data.queue) data.queue = [];
        data.guildID = message.guild.id;
        let info = await ytdl.getInfo(args[0]);
        data.queue.push({
            songTitle: info.title,
            requester: message.author.tag,
            url: args[0],
            channel: message.channel.id
        })
        if (!data.dispatcher) play(bot, data);
        else {
            embed.setColor('fae7b5'); embed.setDescription(`${msgs[2]} ${data.queue[0].songTitle}** ${msgs[3]}`); return bot.send(embed);
        }
        bot.active.set(message.guild.id, data);
        async function play(bot, data) {
            embed.setColor('fae7b5');
            embed.setDescription(`${msgs[4]}  ${data.queue[0].songTitle}** ${msgs[5]} ***${data.queue[0].requester}***`);
            bot.channels.get(data.queue[0].channel).send(embed);
            data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
            data.dispatcher.guildID = data.guildID;
            data.dispatcher.once('end', function () {
                finish(bot, this)
            })
        }
        function finish(bot, dispatcher) {
            let fetched = bot.active.get(dispatcher.guildID);

            fetched.queue.shift();

            if (fetched.queue.length > 0) {
                bot.active.set(dispatcher.guildID, fetched);
                play(bot, fetched)
            } else {
                bot.active.delete(dispatcher.guildID);

                let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
                if (vc) vc.leave();
            }
        }

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
    name: "play",
    aliases: ["музыка", 'плей', 'музло']
};