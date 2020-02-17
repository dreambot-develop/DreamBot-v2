//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let rekl = eval('`' + lang.rekl + '`');
        let evaled = eval('`' + lang.kick + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let reaso = lang.reason;
        let zreason = reaso.split('<>')
        let msgs = evaled.split('<>');
        let actions = lang.actions.split('<>')
        let admin = lang.admin.split('<>')
        let noMoney = lang.noMoney;
        let embed = new Discord.RichEmbed()
            .setTitle(`${msgs[0]}`)
            .setColor('#e22216')
        if (!message.member.hasPermission(`KICK_MEMBERS`)) { embed.setDescription(noPerm); return bot.send(embed); }

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let reason = args.slice(1).join(` `);
        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); }
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        if (!reason) { reason = zreason[1] }
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
        let bembed = new Discord.RichEmbed()
            .setDescription(msgs[0])
            .setColor('#e22216')
            .addField(admin, message.author)
            .addField(actions[1], `${rUser}`)
            .addField(zreason[0], reason)
            .setFooter(rekl, message.author.avatarURL)
            .setThumbnail('https://discordemoji.com/assets/emoji/1651_BanOVE.gif');

        rUser.send(bembed);
        message.guild.member(rUser).kick(reason);
        logschannel.send(bembed)
        bot.send(bembed)
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
    name: `kick`,
    aliases: ['кик']
};