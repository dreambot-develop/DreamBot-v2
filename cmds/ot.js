
const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.guild.id == "502949305372377096") {
  }
    try {
        let bk = require('../botconfig.json');

        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.ot + '`');
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
        let rUser = message.guild.member(message.mentions.users.first() ||bot.users.get(args[0]) || message.guild.members.get(args[0]));
        let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('RANDOM');
        if (!message.member.hasPermission("KICK_MEMBERS")) { embed.setDescription(noPerm); return bot.send(embed); }
        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); }
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        let ot = args.slice(1).join(" ");
        embed.setDescription(`**${ot}**`);
        rUser.send(embed);
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
    name: "ot",
    aliases: ["от"]
};