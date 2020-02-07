  
const Discord = require("discord.js");
const fs = require('fs');
const beautify = module.require("beautify");
const { inspect } = require('util');

module.exports.run = async (bot,message,args) => {
    if (!args[0]) {
      if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return message.reply('Вы не админ бота')
      let emb = new Discord.RichEmbed()
            .setDescription(`HELP`)
            .setColor('#00dbff')
            .addField(`.admin block`,'**Внести пользователя в чёрный список**')
            .addField(`.admin eval`,'**Евал**')
            .addField(`.admin say`,`Бот умеет говорит???`)
        bot.send(emb)
  }

if(args[0] == "seen") {
  let sname = args.slice(0).join(" ");
  let sid = bot.guilds.find('name', `${sname}`).id;
  let embed = new Discord.RichEmbed()
      .addField(`SID запрашиваемого сервера`, `${sid}`, false)
      .addField(`Каналы на данном сервере`, bot.guilds.get(`${sid}`).channels.map((c) => c.id.toString().trim()).slice(1, 24).join(' '), false)
  message.channel.send(embed)
}
if (args[0] == "say") {
        if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return message.reply('Вы не админ бота')

  let botmessage = args.join(" ");
    if (!botmessage) {return}
    message.delete().catch()
      bot.send(botmessage);


}



  
if (args[0] == "block") {

    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[1];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('Введите ID пользователя.');
    }
    if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return 
    if (!user) return message.reply('Вам нужно ввести ID пользователя');
    if (args[1] === '587697798628114442') return message.reply("Ты не можешь занести себя в черный список, Это было бы ужасно.");
    if (args[1] === '374155911478116352') return message.reply("Ты не можешь занести себя в черный список, Это было бы ужасно.");
    if (args[1] === ' 450994494247010314')return message.reply("Ты не можешь занести себя в черный список, Это было бы ужасно.");


    if (!blacklist[user]) {
        blacklist[user] = {
            id: user,
            state: true//,
            //name: user.username
        }
        message.reply(`<@${user}> сейчас в черном списке!`);
        message.react("662046909103341571");

        fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
        });

        bot.guilds.forEach((guild) => {
            if(guild.ownerID === user) {
                message.guild.leave(guild.id)
            }
        })

        return;
    }
    if (blacklist[user].state === true) {
        message.reply("Этот пользователь уже в черном списке");
        return;
    };
}
}

module.exports.help = {
    name: 'admin',
    aliases: ['admin']
      };
