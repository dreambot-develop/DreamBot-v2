//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let userid = message.author.id
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let clanname = args.slice(1).join(` `);
        let clan = bot.profile.fetch(`clan_${userid}`)
        let coins = bot.profile.fetch(`coins_${userid}`)
        let clancost = 9990;
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.clan + '`');
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
        let clanemb = new Discord.RichEmbed()
            .setTitle(`${msgs[0]}`)
            .setColor('ace1af');
        let px = bk.prefix
        if (!args[0]) {
            if (bot.clan.fetch(`${clan}_money`) === null) { bot.profile.delete(`clan_${userid}`); bot.clan.delete(`${clan}_bans_${userid}`) }
            clan = await bot.profile.fetch(`clan_${userid}`)
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return message.channel.send(clanemb); }
            let money;
            let members = bot.clan.fetch(`${clan}_members`);
            let messages = bot.clan.fetch(`${clan}_messages`)
            let owner = bot.users.get(bot.clan.fetch(`${clan}_admin`))
            for (let i = 0; i < members.length; i++) {
                let user = bot.users.get(members[i].slice(0, -1));
                if (!user) continue;
                let userCoins = await bot.profile.fetch(`coins_${user.id}`);
                if (userCoins === null) continue;
                money += userCoins;
            }

            clanemb.setTitle(`**${clan}**`);
            clanemb.addField(`${msgs[2]}`, members,true);
            clanemb.addField(`${msgs[3]}`, messages,true);
            clanemb.setFooter(`${msgs[4]}`+ owner.tag);
            message.channel.send(clanemb)
        } else if (args[0].toLowerCase() == 'create') {

            if (coins < clancost) { clanemb.setDescription(`${msgs[5]} **${clancost.toLocaleString()}$**`); return bot.send(clanemb); }
            if (clan != null) { clanemb.setDescription(`${msgs[6]}`); return bot.send(clanemb); }
            if (!clanname) { clanemb.setDescription(`${msgs[7]}`); return bot.send(clanemb); }
            let created = bot.clan.fetch(clanname);
            if (created === null) {
                clanemb.setDescription(`${msgs[8]} **${clanname}**'`)

                bot.profile.subtract(`coins_${userid}`, clancost)
                bot.profile.set(`clan_${userid}`, clanname)
                bot.clan.set(`${clanname}_admin`, message.author.id);
                bot.clan.set(`${clanname}_money`, coins);
                bot.clan.set(`${clanname}_messages`, 1);
                bot.clan.set(`${clanname}_members`, 1);

                bot.send(clanemb)
            } else {
                bot.send(`${msgs[9]}`);
            };
        } else if (args[0].toLowerCase() == 'go') {

            if (clan != null) { clanemb.setDescription(`${msgs[6]}`); return bot.send(clanemb); }
            if (!clanname) { clanemb.setDescription(`${msgs[10]}`); return bot.send(clanemb); }
            if (bot.clan.fetch(`${clanname}_admin`) === null) { clanemb.setDescription(`${msgs[11]}`); return bot.send(clanemb); }
            let bans = bot.clan.fetch(`${clanname}_bans_${userid}`);
            if (bans != null) { clanemb.setDescription(`${msgs[12]}`); return bot.send(clanemb); }
            bot.profile.set(`clan_${userid}`, clanname)
            bot.clan.add(`${clanname}_members`, 1);
            clanemb.setDescription(`${msgs[13]}`);
            return bot.send(clanemb);


        } else if (args[0].toLowerCase() == 'help') {
            clanemb.addField(`**create**`, `${msgs[14]} ${clancost.toLocaleString()}`)
            clanemb.addField('**help**', `${msgs[15]}`)
            clanemb.addField('**leave**', `${msgs[16]}`)
            clanemb.addField('**go**', `${msgs[17]}`)
            clanemb.addField('**kick**', `${msgs[18]}`);
            clanemb.addField('**ban**', `${msgs[19]}`)
            clanemb.addField('**unban**', `${msgs[20]}`)
            clanemb.addField('delete', `${msgs[21]}`)
            bot.send(clanemb)
        } else if (args[0].toLowerCase() == 'ban') {
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return bot.send(clanemb); }
            if (!args[1]) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            if (!rUser) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            let cal = bot.clan.fetch(`${clan}_admin`);
            if (cal != message.author.id) { clanemb.setDescription(`${msgs[22]}`); return bot.send(clanemb); }
            if (rUser.id == message.author.id) { clanemb.setDescription(`${msgs[23]}`); return bot.send(clanemb); }
            if (bot.clan.fetch(`${clan}_bans_${rUser.id}`) != null) { clanemb.setDescription(`${msgs[24]}`); return bot.send(clanemb); }
            if (bot.profile.fetch(`clan_${rUser.id}`) == clan) {
                bot.profile.delete(`clan_${rUser.id}`)
                bot.clan.set(`${clan}_bans_${rUser.id}`, 1)
                bot.clan.subtract(`${clan}_members`, 1);
                clanemb.setDescription(`${msgs[25]}`);
                return bot.send(clanemb);

            } else {
                bot.clan.set(`${clan}_bans_${rUser.id}`,1)
                clanemb.setDescription(`${msgs[25]}`);
                return bot.send(clanemb);
            };
        } else if (args[0].toLowerCase() == 'unban') {
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return bot.send(clanemb); }
            if (!args[1]) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            if (!rUser) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            let cal = bot.clan.fetch(`${clan}_admin`);
            if (cal != message.author.id) { clanemb.setDescription(`${msgs[22]}`); return bot.send(clanemb); }
            let banned = bot.clan.fetch(`${clan}_bans_${rUser.id}`);
            if (banned === null) { clanemb.setDescription(`${msgs[26]}`); return bot.send(clanemb); }
            bot.clan.delete(`${clan}_bans_${rUser.id}`);
            clanemb.setDescription(`Успешно/Succes!`);
            return bot.send(clanemb);
        } else if (args[0].toLowerCase() == 'kick') {
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return bot.send(clanemb); }
            if (!args[1]) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            if (!rUser) { clanemb.setDescription(noUser); return bot.send(clanemb); }
            let cal = bot.clan.fetch(`${clan}_admin`);
            if (cal != message.author.id) { clanemb.setDescription(`${msgs[22]}`); return bot.send(clanemb); }
            bot.profile.delete(`clan_${rUser.id}`);
            clanemb.setDescription(`${msgs[27]}`);
            bot.clan.subtract(`${clan}_members`, 1);
            return bot.send(clanemb);

        } else if (args[0].toLowerCase() == 'leave') {
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return bot.send(clanemb); }
            let cal = bot.clan.fetch(`${clan}_admin`);
            if (cal == message.author.id) { clanemb.setDescription(`${msgs[28]}`); return bot.send(clanemb); }
            bot.clan.subtract(`${clan}_members`, 1);
            bot.profile.delete(`clan_${message.author.id}`);
            clanemb.setDescription(`${msgs[29]}`);
            return bot.send(clanemb);
        } else if (args[0].toLowerCase() == 'delete') {
            if (clan === null) { clanemb.setDescription(`${msgs[1]}`); return bot.send(clanemb); }
            let cal = bot.clan.fetch(`${clan}_admin`);
            if (cal != message.author.id) { clanemb.setDescription(`${msgs[22]}`); return bot.send(clanemb); }
            clanemb.setDescription(`${msgs[15]}`);
            bot.profile.delete(`clan_${userid}`)
            bot.clan.delete(`${clanname}_admin`);
            bot.clan.delete(`${clanname}_money`);
            bot.clan.delete(`${clanname}_messages`);
            bot.clan.delete(`${clanname}_members`);
            return bot.send(clanemb);
        } else if (args[0].toLowerCase() == 'info') {
            if (!args[1]) { clanemb.setDescription('Укажите название клана/Enter the name of the clan'); return bot.send(clanemb); }
            if (bot.clan.fetch(`${clanname}_money`) == null) { clanemb.setDescription(`${msgs[11]}`); return bot.send(clanemb); }
            clanemb.addField(`${msgs[2]}`, bot.clan.fetch(`${clanname}_members`))
            clanemb.addField(`${msgs[3]}`, bot.clan.fetch(`${clanname}_messages`))
            let ow = bot.users.get(bot.clan.fetch(`${clanname}_admin`))
            clanemb.addField(`${msgs[4]}`, ow.tag)

            bot.send(clanemb);
        };

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
    name: `guild`,
    aliases: [`клан,гильдия,тима`]
};