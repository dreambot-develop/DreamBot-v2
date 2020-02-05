//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {

        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.casino + '`');
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
        let guildid = message.guild.id
        let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')
        if (bot.guild.fetch(`casino_${guildid}`) == false) { embed.setDescription(noPerm); return bot.send(embed); }

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        let userid = message.author.id
        let slot = ['🍒', '🍊', '🍋', '🍉', '🍌', '🍏'];

        let rand1 = Math.floor(Math.random() * (slot.length - 0) + 0);
        let rand2 = Math.floor(Math.random() * (slot.length - 0) + 0);
        let rand3 = Math.floor(Math.random() * (slot.length - 0) + 0);

        let result = slot[rand1] + slot[rand2] + slot[rand3];
        if (!args[0]) { embed.setDescription(`${msgs[1]}\n**${bk.prefix}casino l 1000**`); return bot.send(embed); }
        let bal;
        let adal;
        let cur;
        switch (args[0].toLowerCase()) {
            case `l`:
                bal = bot.lprofile.fetch(`coins_${userid}_${message.guild.id}`);
                adal = `coins_${userid}_${message.guild.id}`
                cur = bot.lprofile;
                break;
            case `g`:
                bal = bot.profile.fetch(`coins_${userid}`);
                adal = `coins_${userid}`
                cur = bot.profile;
                break;
            case `л`:
                bal = bot.lprofile.fetch(`coins_${userid}_${message.guild.id}`);
                adal = `coins_${userid}_${message.guild.id}`
                cur = bot.lprofile;
                break;
            case `г`:
                bal = bot.profile.fetch(`coins_${userid}`);
                adal = `coins_${userid}`
                cur = bot.profile;
                break;
            default:
                embed.setDescription(`${msgs[1]}\n**${bk.prefix}casino l 1000**`);
                return bot.send(embed);
        }
        let uCoins = bal
        let coef1 = 2;
        let coef2 = 3;
        console.log(cur.fetch(`${adal}`));
        if (!cur) return;
        if (!adal) return;
        if (uCoins === null) return;
        if (!isNumeric(Math.floor(parseInt(args[1])))) { embed.setDescription(msgs[3]); return bot.send(embed); }
        if (!args[1]) { embed.setDescription(msgs[3]); return bot.send(embed); }
        if (uCoins < Math.floor(parseInt(args[1]))) { embed.setDescription(`${noMoney} **${bal}**`); return bot.send(embed); }
        if (Math.floor(parseInt(args[1])) < 10) { embed.setDescription(`${msgs[2]} 10`); return bot.send(embed); }
        const bembed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor(`#6600ff`)
            .setFooter(rekl, message.author.avatarURL);
        if (rand1 == rand2 || rand2 == rand3) {
            bembed.setDescription(`🎰**${msgs[0]}**🎰\n${result}\n🎰**${msgs[0]}**🎰\n ${msgs[4]} ${Math.floor(parseInt(args[1]) * coef1)}`);
            bot.send(bembed);
            cur.add(`${adal}`, Math.floor(parseInt(args[1])));


        } else if (rand1 == rand2 && rand2 == rand3) {

            bembed.setDescription(`🎰**${msgs[0]}**🎰\n${result}\n🎰**${msgs[0]}**🎰\n ${msgs[4]} ${Math.floor(parseInt(args[1]) * coef2)}`);
            bot.send(bembed);
            cur.add(`${adal}`, Math.floor(parseInt(args[1]) * coef1))

        } else {
            bembed.setDescription(`🎰**${msgs[0]}**🎰\n${result}\n🎰**${msgs[0]}**🎰\n ${msgs[5]} ${Math.floor(parseInt(args[1]))}`);
            bot.send(bembed);
            cur.subtract(`${adal}`, Math.floor(parseInt(args[1])))


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
    }
};
module.exports.help = {
    name: `casino`,
    aliases: [`c`, `cs`, `cas`, 'казино']
};