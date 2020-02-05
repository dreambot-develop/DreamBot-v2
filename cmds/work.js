
const Discord = module.require("discord.js");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    try {
        let userid = message.author.id;
        let curwork = bot.profile.fetch(`work_${userid}`);
        let cwork = bot.worklist[curwork]
        let str = String(bot.worklist[curwork].works - bot.profile.fetch(`worked_${userid}`));
        let s = ms(((60 / 60) / 1000) - (Date.now() - bot.profile.fetch(`workCooldown_${userid}`)),{long:true});
        let bk = require('../botconfig.json');
        let getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]);
        let roles = bot.guild.fetch(`shop_${message.guild.id}`);
        let prices = bot.guild.fetch(`prices_${message.guild.id}`);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.work + '`');
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
          let raz ;
        let embed = new Discord.RichEmbed()
            .setTitle('**Работа | Job**')
            .setFooter(rekl, message.author.avatarURL)
            .addField(`💵 Поддержите автора и получите бонусы и монеты)`,`[Нажми сюда пж](https://boosty.to/dreambotdonate)`)
            .setColor('RANDOM')
        if (bot.profile.fetch(`workCooldown_${userid}`) > Date.now()) { embed.setDescription(msgs[0]);return bot.send(embed);}
        bot.profile.add(`worked_${userid}`, 1);
        if(bot.profile.fetch(`worked_${userid}`)>=(bot.worklist[curwork].works-1)) bot.profile.add(`work_${userid}`,1)
        if(str>=10)str.slice(str.length-1);
        raz = parseInt(str);
        if(raz == 1 || raz == 5 || raz == 6 || raz == 7 || raz == 8 || raz == 9 || raz == 0) raz = msgs[1];else raz = msgs[2]
        embed.setDescription(`${msgs[3]} ${raz}`)
        console.log(Math.floor(cwork.addCoins))
        console.log(bot.profile.fetch(`coins_${userid}`))
        bot.profile.add(`coins_${userid}`, Math.floor(cwork.addCoins));
        bot.profile.set(`workCooldown_${userid}`, Date.now()+1000*60*60);
      
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
    name: "work",
    aliases: ["работа", "работать","w"]
};