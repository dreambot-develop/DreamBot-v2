const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
   /* client.guild(message.guild.id)
    .then((data) => {
        let erro = new Discord.RichEmbed()
        let boost = (data.boost);
        let name =(data.name)
      
        if (name == undefined) { erro.setDescription(`Ошибка`).setColor('RED').addField(`Причина`,`Сервера нету на сайте server-discord.com`).addField(`Рещение проблемы`,'Если сервер отсутсвует на сайте то воспользуйтесь командой``.sinfo``\nЕсли сервер добавлен и появилось данное сообщение то повторите попытку, если проблема не устранена то сообщите разработчиками ``.bug`` ');return bot.send(erro); };
        if (boost === 0) boost = `Нету`;   
        if (boost === 1) boost = `Light`;
        if (boost === 2) boost = `Pro`;
        if (boost === 3) boost = `MAX`;  
*/
          try {
        let embed = new Discord.RichEmbed()
            .setDescription(`Информация сервера`)
            .setColor('#10c7e2')
            //.addField('[Страница сервера](https://server-discord.com/${message.guild.id}/)', name, true)
            //.addField('<:578122350734868481:668779676075819009>Участников ', data.members, true)
            .addField(`<:online:635177496773656596>Онлайн`,message.guild.members.filter(x=>x.user.presence.status === 'online').size,true)
            .addField(`<:402784531356188672:635418347881627658>Афк`, message.guild.members.filter(x=>x.user.presence.status === 'idle').size, true)
            .addField(`<:dnd:635177496773525508>Не беспокоить`, message.guild.members.filter(x=>x.user.presence.status === 'dnd').size, true )
            .addField(`<:offline:635177496685314049> Не в сети`, message.guild.members.filter(x=>x.user.presence.status === 'offline').size, true )
            .addField('<:578122342220431372:668779675652325386>Владелец сервера', message.guild.owner, true)
            .addField('Эмодзи сервера',message.guild.emojis.map((e) => e.toString()).slice(0, 23).join(' ') || 'Нет')
            .addField('Роли сервера',message.guild.roles.map((r) => r.toString().trim()).slice(0, 23).join(' ') || 'Нет' )
           // .addField(`Boost`, boost,true)
            //.addField('Up`ов', data.upCount,true)
           // .addField(`Место на сайте`,data.place)
            .setThumbnail(message.guild.iconURL)
            .setFooter(`Запрос от ${message.author.tag}`, message.author.avatarURL);

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
    name: "serverinfo",
    aliases: ["sinfo", 'серверинфо', 'синфо']
};