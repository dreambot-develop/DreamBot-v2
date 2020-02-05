//Завершено
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

        let bk = require('../botconfig.json');
        let role = message.mentions.roles.first()
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.autorole + '`');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let msgs = evaled.split('<>');
        
        let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')

        if (!message.member.hasPermission("ADMINISTRATOR")) { embed.setDescription(noPerm); return bot.send(embed); }

        if (!args[0]) { embed.setDescription(`${bk.prefix}autorole @role`); return bot.send(embed); }
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
        if (!role) { embed.setDescription(`${bk.prefix}autorole @role`); return bot.send(embed); }
        let guildid = message.guild.id
        bot.guild.set(`autorole_${guildid}`, role.id)
        let bembed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('#10e250')
            .setDescription(`**${msgs[1]}**`)
            .setFooter(rekl, message.author.avatarURL);
        logschannel.send(bembed)
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
    }

};
module.exports.help = {
    name: "autorole",
    aliases: ["ar", 'автороль']
};