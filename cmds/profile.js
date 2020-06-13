//Завершено

const Discord = module.require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.profile + '`');
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
        let noMoney = lang.noMoney;

        
          // - -  - - - -
let us = message.mentions.users.first() ? message.mentions.users.first() : message.author;
const status = {
    online: "В сети",
    idle: "Не активный",
    dnd: "Не беспокоить",
    offline: "Не в сети"
  };
  const devices = {
     desktop: "Компьютер",
     web: "Браузер",
     mobile: "Телефон"
  }
  const statuses = {
     online: "<:online:635177496773656596> ",
     idle: " <:402784531356188672:635418347881627658>",
     dnd: "<:dnd:635177496773525508>",
     offline: "<:offline:635177496685314049> Не в сети",
     invisible: "<:offline:635177496685314049>   Не в сети"
  }
  let desc = "";
      if(us.presence.clientStatus && Object.keys(us.presence.clientStatus).length > 0) {
        for (let device in message.author.presence.clientStatus) {
          desc += `${statuses[us.presence.clientStatus[device]]} ${devices[device]}\n`
        }
      } else {
        desc = statuses[us.presence.status]
      }

	let coins = bot.profile.fetch(`coins_${us.id}`);
        let lvl = bot.profile.fetch(`lvl_${us.id}`);
        let xp = bot.profile.fetch(`xp_${us.id}`);
        let rep = bot.profile.fetch(`rep_${us.id}`);
        let messages = bot.profile.fetch(`messages_${us.id}`);
        let warns = bot.lprofile.fetch(`warns_${us.id}_${message.guild.id}`);
        let admin = bot.profile.fetch(`admin_${us.id}`);
        let lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);
        let likes = bot.profile.fetch(`likes_${us.id}`);
        let clan = bot.profile.fetch(`clan_${us.id}`);
        let partner = bot.profile.fetch(`partner_${us.id}`);
        let marks = bot.profile.fetch(`marks_${us.id}`);
        let work = bot.profile.fetch(`work_${us.id}`);
        let votes = bot.profile.fetch(`votes_${us.id}`);

        if (warns === null) await bot.lprofile.set(`warns_${us.id}_${message.guild.id}`, 0);
        if (coins === null) await bot.profile.set(`coins_${us.id}`, 0);
        if (lvl === null) await bot.profile.set(`lvl_${us.id}`, 1);
        if (xp === null) await bot.profile.set(`xp_${us.id}`, 0);
        if (rep === null) await bot.profile.set(`rep_${us.id}`, 0);
        if (messages === null) await bot.profile.set(`messages_${us.id}`, 0);
        if (admin === null) await bot.profile.set(`admin_${us.id}`, 0);
        if (lcoins === null) await bot.lprofile.set(`coins_${us.id}_${message.guild.id}`, 0);
        if (likes === null) await bot.profile.set(`likes_${us.id}`, 0);
        if (marks === null) await bot.profile.set(`marks_${us.id}`, '🐴 ');
        if (work === null) await bot.profile.set(`work_${us.id}`,0);
        if(votes = null)await bot.profile.set(`votes_${us.id}`,0);
        if (clan === null) clan = msgs[0];
        if (partner != null) {partner = bot.users.get(partner); partner = partner.tag};
        if (partner === null) partner = msgs[0];
        coins = bot.profile.fetch(`coins_${us.id}`);
        lvl = bot.profile.fetch(`lvl_${us.id}`);
        xp = bot.profile.fetch(`xp_${us.id}`);
        rep = bot.profile.fetch(`rep_${us.id}`);
        messages = bot.profile.fetch(`messages_${us.id}`);
        admin = bot.profile.fetch(`admin_${us.id}`);
        lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);
        likes = bot.profile.fetch(`likes_${us.id}`);
        marks = bot.profile.fetch(`marks_${us.id}`);
        work = bot.profile.fetch(`work_${us.id}`);
        votes = bot.profile.fetch(`votes_${us.id}`);
     
        let embed = new Discord.RichEmbed()
            .setTitle(` ${msgs[14]} **${us.tag}**`)
            //.setThumbnail('https://discordemoji.com/assets/emoji/1438_aSpookyDance.gif')
            .setColor(`#00dbff`)
            .addField(`:moneybag: ${msgs[1]}`, `\`${coins}\``,true) //ваш банк
            .addField(`:money_with_wings: ${msgs[2]}`, `\`${lcoins} \``,true)// ваш кошелёк
            .addField(`:bar_chart: ${msgs[4]}`,  `\`${lvl}\``, true)            
            .addField(`:spy: ${msgs[5]}`,  `\`${xp}/${lvl * 5}\``, true)
            .addField(`:e_mail: ${msgs[9]}`, `\`${messages}\``, true)
            .addField(`:boom: ${msgs[6]}`, `\`${rep}\``, true)
            .addField(`:japanese_ogre: ${msgs[7]}`, `\`${clan}\``,true)
            .addField(`:couple_with_heart: ${msgs[8]}`, `\`${partner}\``,true)
            .addField(`:military_medal: ${msgs[11]}`, marks,true)
            .addField(`:heart: ${msgs[10]}`,  `\`${likes}\``, true)
            .addField(`⛏ ${msgs[12]}`,`\`${bot.worklist[work].name}\``,true)  
            .addField(`:military_medal: ${msgs[13]}`, `\`${votes}\``,true)
            .addField("Статус", `${desc}`, true)

        //.addField("Присоединился:", `\`${moment.utc(argsUser.joinedAt).format(`DD.MM.YYYY  |  HH:mm:ss `)}\``, true)
        //.addField("${msgs[15]}", `\`${moment.utc(argsUser.createdAt).format(`DD.MM.YYYY  |  HH:mm:ss `)}\`` , true)
            //.addField(`${msgs[15]}`, `${us.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles}`).join(" **|** ") || "Нет ролей/none"}`, false)
            .addField(`💵 Поддержите автора и получите бонусы и монетки)`,`[Нажми сюда пж](https://boosty.to/dreambotdonate)`)
            .setFooter(rekl, message.author.avatarURL);
             if (admin == 1) embed.addField(`:spy: Вы администратор бота`, `А другие нет)`, true)
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
    };

};
module.exports.help = {
    name: "profile",
    aliases: ["p", 'профиль', 'я', 'моястата', 'моястатистика']
};