//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let rekl = eval('`' + lang.rekl + '`');
        let evaled = eval('`' + lang.joinleave + '`');
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
            .setTitle(`**${msgs[0]}**`)
            .setColor('RANDOM')
        if (!message.member.hasPermission(`ADMINISTRATOR`)) { embed.setDescription(noPerm); return bot.send(embed); }
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
        let joinname = 'join-leave'
        let joinchannel = message.guild.channels.get(bot.guild.fetch(`joinleave_${message.guild.id}`));
        if (!joinchannel) {
            await message.guild.createChannel(joinname, { type: 'text' }).then(channel => {
                bot.guild.set(`joinleave_${message.guild.id}`, channel.id);
            });
        }
        embed.setDescription(msgs[1])
        embed.setFooter(rekl, message.author.avatarURL)
        logschannel.send(embed);
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
    }

};
module.exports.help = {
    name: `jo ccinleave`,
    aliases: [`входвыход`, 'jl']
};