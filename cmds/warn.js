//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]);
        let roles = bot.guild.fetch(`shop_${message.guild.id}`);
        let prices = bot.guild.fetch(`prices_${message.guild.id}`);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.warn + '`');
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
            .setTitle("**Варн**")
            .setColor('#e22216');
        if (!message.member.hasPermission("BAN_MEMBERS")) { embed.setDescription(noPerm); return bot.send(embed); }

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); }
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        let warns = bot.lprofile.fetch(`warns_${rUser.id}_${rUser.guild.id}`);
        bot.lprofile.add(`warns_${rUser.id}_${rUser.guild.id}`, 1);
        let embeds = new Discord.RichEmbed()
            .setDescription('Warn')
            .setColor('#e22216')
            .addField(admin, message.author)
            .addField(msgs[0], `${rUser}`)
            .setFooter(rekl)
            .addField(msgs[1], `${warns}/3`);
        let logsname = 'logs'
        let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
        if (!logschannel) {
            await message.guild.createChannel(logsname, { type: 'text' }).then(channel => {

                bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
                channel.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false,
                });
            });
        }
        logschannel.send(embeds)
        bot.send(embeds);
        if (warns >= 3) {
            bot.lprofile.set(`warns_${rUser.id}`, 0);
            message.guild.member(rUser).ban("3/3 Предупреждений | Warns");
        };
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
    }

};
module.exports.help = {
    name: "warn",
    aliases: ["варн", 'предупреждение', 'прикол']
};