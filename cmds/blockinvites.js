//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let evaled = eval('`' + lang.blockInvites + '`');
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
    let logsname = 'logs'
    let embed = new Discord.RichEmbed()
        .setTitle(`**${msgs[0]}**`)
        .setColor('#10e250')
    if (!message.member.hasPermission("ADMINISTRATOR")) { embed.setDescription(noPerm); return bot.send(embed); }
    let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
    if (!logschannel) {
        await message.guild.createChannel(logsname, { type: 'text' }).then(channel => {

            bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
            bot.guild.set(`blockInvites_${message.guild.id}`, true);
            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: false,
            });
        });
    }
    let bembed = new Discord.RichEmbed()
        .setTitle(`**${msgs[0]}**`)
        .setColor('#10e250')
        .setDescription(`**${msgs[1]}**`)
        .setFooter(rekl, message.author.avatarURL);
    logschannel.send(bembed)
    bot.send(bembed);
};
module.exports.help = {
    name: "blockinvites",
    aliases: ["bi", 'антиреклама']
};