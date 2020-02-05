//Завершено

const Discord = module.require(`discord.js`);
module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]);
        let roles = bot.guild.fetch(`shop_${message.guild.id}`);
        let prices = bot.guild.fetch(`prices_${message.guild.id}`);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.voiceonline + '`');
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
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')
        if (!message.member.hasPermission(`MANAGE_CHANNELS`)) { embed.setDescription(noPerm); return bot.send(embed); }
        let voicename = args.join(` `);
        if (!voicename) voicename = 'Voice-Online:'
        message.guild.createChannel(`${voicename} ${message.guild.members.filter(m => m.voiceChannel).size}`, { type: 'voice' }).then(channel => {

            bot.guild.set(`voiceOnline_${message.guild.id}`, channel.id);
            bot.guild.set(`voiceOnlineText_${message.guild.id}`, voicename);

            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: true,
                CONNECT: false,
            })
        });
        let embeds = new Discord.RichEmbed()
            .setDescription(msgs[0])
            .setColor('#004953')
            .addField(msgs[1], `${voicename} ${message.guild.members.filter(m => m.voiceChannel).size}`)
            .setFooter(rekl, message.author.avatarURL);
        let logsname = 'logs'
        let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
        if (!logschannel) {
            await message.guild.createChannel(logsname, 'text').then(channel => {

                bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
                channel.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false,
                });
            });
        }
        logschannel.send(embeds)
        bot.send(embeds);
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
    name: `voiceonline`,
    aliases: [`vonline`, 'голосовойонлайн']
};