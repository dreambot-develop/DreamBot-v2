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
        let evaled = eval('`' + lang.shop + '`');
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
        let x = Math.floor(args[0] - 1);
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        let embed = new Discord.RichEmbed()
            .setTitle(msgs[0])
            .setColor('#e22216')


        if (!args[0]) {
            embed.setColor('ffa420');
            if (roles == null || roles[0] == '') { embed.setDescription(msgs[1]); return bot.send(embed); }
            for (let i = 0; i < roles.length; i++) {
                let role = message.guild.roles.get(`${(roles[i].slice(0, -1))}`);
                if (!role) { role = 'deleted-role'; embed.addField(`**[${i + 1}]** ${role}`, `${parseInt(prices[i]).toLocaleString()}`) }
                else embed.addField(`**[${i + 1}]** ${role.name}`, `${parseInt(prices[i]).toLocaleString()}`, true)
            }
            return bot.send(embed)
        }
        if (args[0].toLowerCase() == 'add') {
            if (!message.member.hasPermission("MANAGE_ROLES")) { embed.setDescription(noPerm); return bot.send(embed); }
            if (!args[1]) { embed.setDescription(msgs[2]); return bot.send(embed); }
            if (!args[2]) { embed.setDescription(msgs[3]); return bot.send(embed); }
            if (!isNumeric(args[2])) { embed.setDescription(msgs[3]); return bot.send(embed); }
            if (!getRole) { embed.setDescription(msgs[2]); return bot.send(embed); }
            bot.guild.push(`shop_${message.guild.id}`, `${getRole.id}b`)
            bot.guild.push(`prices_${message.guild.id}`, `${Math.floor(args[2])}b`)
            embed.setColor('ffa420');
            embed.setDescription(msgs[4]);
            return bot.send(embed);
        }
        if (args[0] == 'clr') {
            if (!message.member.hasPermission("ADMINISTRATOR")) { embed.setDescription(noPerm); return bot.send(embed); }
            bot.guild.delete(`shop_${message.guild.id}`)
            bot.guild.delete(`prices_${message.guild.id}`)
            embed.setDescription(msgs[5]);
            return bot.send(embed);
        }
        if (args[0].toLowerCase() == 'help') { embed.setDescription(msgs[6]); return bot.send(embed); }
        if (isNumeric(args[0])) {
            Math.floor(args[0])
            if (args[0] > roles.length) { embed.setDescription(`Вы ввели слишком большое число | You > num ya hz inglish`); return bot.send(embed); }
            if (args[0] <= 0) { embed.setDescription(`Вы ввели слишком маленькое число | You < num ya hz inglish`); return bot.send(embed); }
            if (roles[x]) {
                if (bot.lprofile.fetch(`coins_${message.author.id}_${message.guild.id}`) < parseInt(prices[x])) { embed.setDescription(noMoney); return bot.send(embed); }
                let role = message.guild.roles.get(`${(roles[x].slice(0, -1))}`);
                if (!role) { embed.setDescription(`Роль была удалена | Role deleted`); return bot.send(embed); }
                if (message.member.roles.has(role.id)) { embed.setDescription(`Вы уже купили эту роль | You arleady buy thus role`); return bot.send(embed); }
                bot.lprofile.subtract(`coins_${message.author.id}_${message.guild.id}`, parseInt(prices[x].slice(0, -1)))
                message.member.addRole(role);
                embed.setColor('ffa420');
                embed.setDescription(`${msgs[9]} ${role}`);
                return bot.send(embed);
            }
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
    name: "shop",
    aliases: ["магазин", 'шоп', 'жопа'],
    enabled: false
};