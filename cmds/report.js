//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.report + '`');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let reaso = lang.reason;
        let reasonz = reaso.split('<>')
        let msgs = evaled.split('<>');
        let actions = lang.actions.split('<>')
        let noMoney = lang.noMoney;
    if (args) if (args[0] == 'help') return bot.send(`**report** - Система репортов на другого человека\n**Использование:** ${bk.prefix}report @USER TEXT`);
    let reportname = 'reports'
    let reportchannel = message.guild.channels.get(bot.guild.fetch(`reportsChannel_${message.guild.id}`));
    if(!reportchannel){
        await message.guild.createChannel(reportname, 'text').then(channel => {

            bot.guild.set(`reportsChannel_${message.guild.id}`,channel.id);
            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: false,
            });
        });
    }
    let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')
    let rUser = message.guild.member(message.mentions.users.first());
    if (!rUser) rUser = reasonz[1];
    let reason = args.join(" ");
    if (!reason) { embed.setDescription(`${msgs[1]}`); return bot.send(embed); };
    let emb = new Discord.RichEmbed()
        .setDescription(`${msgs[0]}`)
        .setColor('#702db6')
        .addField(msgs[3], message.author)
        .addField(msgs[4], rUser)
        .addField(msgs[5], message.channel)
        .addField(msgs[6], reason)
        .setTimestamp()
        reportchannel.send(emb);
        message.react("662046909103341571");
    };
    module.exports.help = {
        name: "report",
        aliases: ["rp", 'репорт', 'пожаловаться', 'ябида', 'шестерка', 'мразь']
    };