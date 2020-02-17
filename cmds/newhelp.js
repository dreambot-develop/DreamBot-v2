//Завершено

const Discord = require("discord.js");
const rm = require("discord.js-reaction-menu");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.help + '`');
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
  
  let e = new Discord.RichEmbed()
    .setThumbnail(bot.user.displayAvatarURL)
 .setDescription(`HELP`)
          .setColor(`#ff00ff`)
  
  let main = new Discord.RichEmbed()
          .setDescription(`${msgs[6]}`,true)
          .setColor(`#ff00ff`)
        .addField('.add',`${msgs[7]}`,true)
        .addField('.bonus',`${msgs[8]}`,true,true)
        .addField('.casino',`${msgs[9]}`,true)
        .addField('.guild',`${msgs[10]}`,true)
        .addField('.pay',`${msgs[11]}`,true)
        .addField('.profile',`${msgs[12]}`,true)
        .addField('.shop',`${msgs[13]}`,true)
        .addField('.set',`${msgs[14]}`,true)
        .addField('.marks',`${msgs[15]}`,true)
        .addField('.work',`${msgs[16]}`,true)
        .addField('.lroll',`${msgs[17]}`,true)
        .addField('.groll',`${msgs[18]}`,true)
        .setFooter(rekl, message.author.avatarURL);
  
  let adm = new Discord.RichEmbed()
          .setColor(`#ff00ff`)
  .setDescription(`${msgs[19]}`,true)
         .addField('.report',`${msgs[20]}`,true)
         .addField('.autorole',`${msgs[21]}`,true)
         .addField('.welcomemessage',`${msgs[22]}`,true)
         .addField('.createstats',`${msgs[23]}`,true)
         .addField('.roomcreator',`${msgs[24]}`,true)
         .addField('.cmdchannel #упоминание/ping',`${msgs[25]}`,true)
         .addField('.sh', `${msgs[26]}`,true)
         .addField('.voiceonline ваше название/your name',`${msgs[27]}`,true)
         .addField('.blockinvites',`${msgs[28]}`,true)
         .setFooter(rekl, message.author.avatarURL);
  
  let stuffs = new Discord.RichEmbed()
            .setColor(`#ff00ff`)

   .setDescription(`${msgs[29]}`,true)
     .addField('.avatar',`${msgs[30]}`,true)
     .addField('.help',`${msgs[31]}`,true)
     .addField('.ping',`${msgs[32]}`,true)
     .addField('.invite', `${msgs[33]}`,true)
     .addField('.userinfo',`${msgs[34]}`,true)
     .addField('.serverinfo',`${msgs[35]}`,true)
     .addField('.createstats',`${msgs[36]}`,true) 
     .addField('.botstats',`${msgs[37]}`,true)
     .setFooter(rekl, message.author.avatarURL);
     
  let configs = new Discord.RichEmbed()
    .setDescription(`${msgs[38]}`,true)  
              .setColor(`#ff00ff`)

        .addField('.joke',`${msgs[39]}`,true)
        .addField('.cat', `${msgs[40]}`,true)
        .addField('.dog',`${msgs[41]}`,true)
        .addField('.fox',`${msgs[42]}`,true)
        .addField('.kiss @упоминание/@metion',`${msgs[43]}`,true)
        .addField('.slap @упоминание/@metion',`${msgs[44]}`,true)
        .addField('.roll число',`${msgs[45]}`,true)
        .addField('.ms',`${msgs[46]}`,true)
        .addField('.marry',`${msgs[47]}`,true)
        .addField('.like @упомнинание/@metion',`${msgs[48]}`,true)
        .addField('.textflip',`${msgs[49]}`,true)
        .addField('.gihub',`${msgs[50]}`,true)
        .addField('.t',`${msgs[51]}`,true)
       var commands = 
            `Игрок:\n`+
            `- \`stats <никнейм>\` | Просмотр статистики игрока\n`+
            `- \`friends <никнейм>\` | Перечисление друзей игрока\n\n`+
            `Гильдия:\n`+
            `- \`guild -i <ID> | -t <тэг> | -n <имя>\` | Просмотр статистики гильдии\n\n`+
            `Онлайн:\n`+
            `- \`online\` | Просмотр онлайна на сервере\n`+
            `- \`streams\` | Просмотр идущих стримов на сервере\n`+
            `- \`staff\` | Перечисление персонала сервера онлайн`;
  let vime = new Discord.RichEmbed()
                .setColor("#36393f")
                .setTitle('Команды для взаимодействия с данными VimeWorld')
                .setDescription(commands)
                
  new rm.menu(message.channel, message.author.id, [e, main, adm, stuffs, configs,vime], 240000);
  
  
     
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`,true)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`,true, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {

    name: `shelp`,
    aliases: [`helps`,`xaxa`]
    //aliases: [`h`, `помощь`, 'хелп', 'хэлп', 'помогите', 'помогающий', 'помогатор', 'помогитехристаради', 'помощник', 'помогать', 'спасите', 'нупомогите']
};