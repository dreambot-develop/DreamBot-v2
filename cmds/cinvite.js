const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {

let guild = bot.guilds.get(args[0]);
  //message.delete(5000);
      message.react("662046909103341571");

  let config = require('../botconfig.json');   
  if(message.author.id !== config.admin && message.author.id !== "502948927809781763") return message.channel.send("вы не админ бота.");

if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
 guild.fetchInvites()
        .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/' + invites.map(invite => invite.code).join('\n')))
        .catch(console.error);
}

module.exports.help = {
    name: 'cinvite',
    aliases: []
}