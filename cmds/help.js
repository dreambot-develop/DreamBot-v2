//Завершено

const Discord = module.require(`discord.js`);

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
        if (!args[0]) {
        let emb = new Discord.RichEmbed()
            .setDescription(`HELP`)
            .setColor('#00dbff')
            .addField(`**:dollar: ${msgs[0]}**`, '``.add`` ``.bonus`` ``.casino`` ``.clan`` ``.pay`` ``.profile`` ``.shop`` ``.set`` ``.marks`` ``.work`` ``.groll`` ``.lroll``')
            .addField(`**:gun: ${msgs[1]}**`, ' ``.report`` ``.autorole`` ``.welcomemessage`` ``.createstats`` ``.roomcreator`` ``.cmdchannel`` ``.sh`` ``.voiceonline`` ``.blockinvites``')
            .addField(`**:desktop: ${msgs[2]}**`, '``.davatar`` ``.help`` ``.ping`` ``.invite`` ``.userinfo`` ``.serverinfo`` ``.sdcserverinfo`` ``.createstats`` ``.botstats``')
            .addField(`**:tada: ${msgs[3]}**`, '``.joke`` ``.cat`` ``.dog`` ``.fox`` ``.kiss`` ``.slap`` ``.roll`` ``.ms`` ``.marry`` ``.like`` ``.textfilp`` ``.t`` ``.gihub`` ')
            .addField(`**:bar_chart: ${msgs[4]}**`,'``.help`` ``.stats`` ``.guild id/name/tag`` ``.staff`` ``.ping`` ``.streams``')
            .setFooter(`${msgs[5]}`)
            .setThumbnail('https://cdn.discordapp.com/avatars/572285950034444298/698a301c9c0f9d732e1b8aafd9cb7b82.png');
        bot.send(emb)
        }
        if (args[0] == "eco") { 
        let eco = new Discord.RichEmbed()
        .setDescription(`${msgs[7]}`)
        .setColor(`GREEN`)
        .addField('.add',`${msgs[8]}`)
        .addField('.bonus',`${msgs[9]}`)
        .addField('.casino',`${msgs[10]}`)
        .addField('.guild',`${msgs[11]}`)
        .addField('.pay',`${msgs[12]}`)
        .addField('.profile',`${msgs[13]}`)
        .addField('.shop',`${msgs[14]}`)
        .addField('.set',`${msgs[14]}`)
        .addField('.marks',`${msgs[15]}`)
        .addField('.work',`${msgs[16]}`)
        .addField('.lroll',`${msgs[17]}`)
        .addField('.groll',`${msgs[18]}`)
        .setFooter(rekl, message.author.avatarURL);
        bot.send(eco)


                    };
     if (args[0] == "admin") {
    let admin = new Discord.RichEmbed()
         .setDescription(`${msgs[19]}`)
         .addField('.report',`${msgs[20]}`)
         .addField('.autorole',`${msgs[21]}`)
         .addField('.welcomemessage',`${msgs[22]}`)
         .addField('.createstats',`${msgs[23]}`)
         .addField('.roomcreator',`${msgs[24]}`)
         .addField('.cmdchannel #упоминание/ping',`${msgs[25]}`)
         .addField('.sh', `${msgs[26]}`)
         .addField('.voiceonline ваше название/your name',`${msgs[27]}`)
         .addField('.blockinvites',`${msgs[28]}`)
         .setFooter(rekl, message.author.avatarURL);
        bot.send(admin)

    };
    if (args[0] == "info") {
   let info = new Discord.RichEmbed()
     .setDescription(`${msgs[29]}`)
     .addField('.avatar',`${msgs[30]}`)
     .addField('.help',`${msgs[31]}`)
     .addField('.ping',`${msgs[32]}`)
     .addField('.invite', `${msgs[33]}`)
     .addField('.userinfo',`${msgs[34]}`)
     .addField('.serverinfo',`${msgs[35]}`)
     .addField('.createstats',`${msgs[36]}`) 
     .addField('.botstats',`${msgs[37]}`)
     .setFooter(rekl, message.author.avatarURL);
     
     bot.send(info)
    };
    if (args[0] == "fun") {
        let fun = new Discord.RichEmbed()
        .setDescription(`${msgs[38]}`)  
        .addField('.joke',`${msgs[39]}`)
        .addField('.cat', `${msgs[40]}`)
        .addField('.dog',`${msgs[41]}`)
        .addField('.fox',`${msgs[42]}`)
        .addField('.kiss @упоминание/@metion',`${msgs[43]}`)
        .addField('.slap @упоминание/@metion',`${msgs[44]}`)
        .addField('.roll число',`${msgs[45]}`)
        .addField('.ms',`${msgs[46]}`)
        .addField('.marry',`${msgs[47]}`)
        .addField('.like @упомнинание/@metion',`${msgs[48]}`)
        .addField('.textflip',`${msgs[49]}`)
        .addField('.gihub',`${msgs[50]}`)
        .addField('.t',`${msgs[51]}`)

        bot.send(fun)
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
    name: `help`,
    aliases: [`h`, `помощь`, 'хелп', 'хэлп', 'помогите', 'помогающий', 'помогатор', 'помогитехристаради', 'помощник', 'помогать', 'спасите', 'нупомогите']
};