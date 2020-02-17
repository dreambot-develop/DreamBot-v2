//Завершено

const Discord = module.require("discord.js");
let search = require('yt-search');

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let errz = lang.err;
        let err = errz.split('<>');
        let msg = args.join(' ')
        search(msg, function (err, res) {
            if (err) return;
            let videos = res.videos
            let firstResult = videos[0]

            let commandFile = require('./play.js');
            commandFile.run(bot, message, [firstResult.url]);



        });
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
    name: "search",
    aliases: ["поиск", 'искать']
};