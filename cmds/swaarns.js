const Discord = module.require("discord.js");
const SDC = require('sdc-api');
const client = new SDC("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MjI4NTk1MDAzNDQ0NDI5OCIsInBlcm1zIjowLCJpYXQiOjE1NzcxMTYxMDJ9.a4-2KNbVvKD_917PMsuS_sSX4JWX-LQO-ElF5HaKkGU")
module.exports.run = async (bot, message, args) => {
    let us = message.mentions.users.first() || message.author;
    client.warns(us)
    .then((data) => {
          try {
        let embed = new Discord.RichEmbed()
            .setDescription(`Информация сервера`)
            .setColor('#10c7e2')
            .addField('Предупреждения <@data.id>', data.warns,true)
           // .addField(`Место на сайте`,data.place)
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

});};
module.exports.help = {
    name: "swarns",
    aliases: ["swrn"]
};