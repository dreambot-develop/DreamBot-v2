//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let rekl = eval('`' + lang.rekl + '`');
        let evaled = eval('`' + lang.like + '`');
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
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')

        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); }
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        let liked = bot.profile.fetch(`liked_${message.author.id}`);
        let likes = bot.profile.fetch(`likes_${rUser.id}`);
        if (rUser.id == message.author.id) { embed.setDescription(msgs[1]); return bot.send(embed); };
        if (bot.profile.fetch(`lvl_${message.author.id}`) < 10) { embed.setDescription(msgs[2]); return bot.send(embed); }
        for (let i = 0; i < liked.length; await i++) {
            if (liked[i] == rUser.id) { embed.setDescription(msgs[3]); return bot.send(embed); }
        }
        if (likes === null) await bot.profile.set(`likes_${rUser.id}`, 1);
        else { bot.profile.add(`likes_${rUser.id}`, 1) }
        bot.profile.push(`liked_${message.author.id}`, `${rUser.id}`);
        likes = bot.profile.fetch(`likes_${rUser.id}`);
        let bembed = new Discord.RichEmbed()
            .setTitle(`:heart: :heart: :heart: `)
            .setColor('#10e250')
            .setDescription(`${rUser} ${msgs[4]} ${likes}**`)
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
    name: `like`,
    aliases: [`лайк`, 'луйк', 'лыйк', 'луки', 'лаку', 'кула', 'лика', 'лаик', 'лаек', 'луку']
};