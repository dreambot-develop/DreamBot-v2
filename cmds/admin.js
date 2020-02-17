  
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
            .addField(`.admin servers`,'**Список серверов**')
            .addField(`.admin eval`,'**Евал**')
            .addField(`.admin invite`,'**Войти на сервер по айди**')
            .addField(`.admin say`,`**Бот умеет говорит???**`)
            .addField(`.admin seen`,`**Список ID указаного сервера**`)
        bot.send(emb)
  }

if(args[0] == "seen") {
  let sname = args.slice(1).join(" ");
  let ss = bot.guilds.get(`${args[1]}`); 
  let embed = new Discord.RichEmbed()
      .addField(`SID запрашиваемого сервера`, `${sid}`, false)
      .addField(`Каналы на данном сервере`, ss.channels.map(x => x.id).join(`\n`), false)
  message.channel.send(embed)
}
if (args[0] == "say") {
        if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return message.reply('Вы не админ бота')

  let botmessage = args.slice(1).join(" ")
    if (!botmessage) {return}
    message.delete().catch()
      bot.send(botmessage);


}
if(args[0] == "invite") {
  let invg = args[1];
  if(!invg) {
		let embederror1 = new Discord.RichEmbed()
				.setColor(`#a31f26`)
				.setDescription(`Укажи id сервера!`)
		message.channel.send(embederror1).then(msg => msg.delete(5000));
		return;
	};
  let tip1 = bot.channels.get(`${invg}`)
  if(!tip1) return message.channel.send({embederror: 
    embederror = new Discord.RichEmbed()
      .setColor(`#a31f26`)
      .setDescription(`Сервер не найден!`)
  }).then(msg => msg.delete(10000));
  tip1.createInvite().then(function(newInvite){
    try {
      let embed = new Discord.RichEmbed()
				.setDescription(`[${newInvite.guild} - ссылка на сервер](https://discord.gg/${newInvite.code})`)
				.setColor("GREEN")
				.addField("❯ Название сервера", `> ❯ ${newInvite.guild.name} =>\n > ❯ <#${invg}>`, true)
				.addField("❯ SID", `> ❯ ${newInvite.guild.id}`, true)
				            message.react("662046909103341571");

	bot.users.get("587697798628114442").send(embed);
    } catch(error) {
      let embederror = new Discord.RichEmbed()
				.setTitle(`Ошибка выдачи инвайта!`)
				.setColor(`#a31f26`)
				.setDescription(`\`\`\`${error}\`\`\``)
		  message.channel.send(embederror).then(msg => msg.delete(5000))
		  console.error(error)
    }
  })
}
if (args[0] == "invites") {
  if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') {
   message.reply(new Discord.RichEmbed()
      .setColor("#33353c")
      .setTitle('Выполнение...')
      .setFooter(`${bot.user.username}`, bot.user.avatarURL)
      .setTimestamp()
      .setThumbnail('https://img.icons8.com/clouds/100/000000/error.png')
      .addField("Ошибка","**У вас нет прав**")
      .setAuthor(`${bot.user.username}`)).then(msg => msg.delete(5000));
 }
  let sinv = bot.guilds.get(`${args[1]}`)
  var randomOld1 = [`#a31f26`, `#fe447d`, `#f78f2e`, `#fedc0c`, `#d1f20a`, `#5cd05b`, `#03c1cd`, `#0e10e6`, `#9208e7`, `#f84c00`, `#f3f354`, `#bff1e5`, `#3bc335`, `#7af5ca`, `#448bff`, `#101ab3`, `#d645c8`, `#0afe15`, `#0acdfe`, `#ff9600`, `#b21ca1`];
  var randomOld = randomOld1[Math.floor(Math.random() * randomOld1.length)];
  let imag = `https://media.discordapp.net/attachments/653496069933498378/660793857063124993/rainbow.gif?width=241&height=2`;
 sinv.fetchInvites()
        .then(invites => message.channel.send(new Discord.RichEmbed().setImage(imag).setColor(randomOld).setDescription('Инвайты запрошенного сервера:\n' + invites.map(invite => invite.code).join('\n'))))
.catch(console.error)
}
if (args[0] == "servers") {
  if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return message.reply('Вы не админ бота')

  let ss = bot.guilds.size.toLocaleString();
  let sss;
  sss = --ss;
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`Сервера: ${sss}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(0, 23).join('\n'), false)
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
  
 if(sss > 24) {
   let embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .addField(`Сервера: ${sss}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(24, 48).join('\n'), false)
   message.channel.send(embed)
 }

 if(sss > 48) {
     let embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .addField(`Сервера: ${sss}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(49, 73).join('\n'), false)
     message.channel.send(embed)
   }
 
 if(ss > 73) {
     let embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .addField(`Сервера: ${sss},${g.id}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(74, 97).join('\n'), false)
     message.channel.send(embed)
 }
 if(ss > 98) {
   let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .addField(`Сервера: ${sss},${g.id}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(98, 121).join('\n'), false)
   message.channel.send(embed)
}
 if(ss > 122) {
     let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`Сервера: ${sss}`, bot.guilds.map((g) => g + " \`(" + g.id + ")\`".toString().trim()).slice(122, 145).join('\n'), false)
    message.channel.send(embed)
 }
      }
if (args[0] == "eval") {

  let config = require('../botconfig.json');
  if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return 
  let embed = new Discord.RichEmbed();
        let toEval = args.slice(1).join(" ");
        if (!toEval) return message.channel.send("**Введите код которуй нужно евалюировать.**");
        try {
            let _ = eval(toEval);

  
            embed.addField('Вывод', `\`\`\`js\n${beautify(inspect(_, { depth: 0 }), { format: "js" })}\`\`\``);
            message.react("662046909103341571");
        } catch (error) {
            embed.addField("Ошибка.",error)
            embed.addField("код:", `\`\`\`js\n${beautify(toEval, { format: "js" })}\n\`\`\``);
            embed.setColor("RED"); // цвет эмбеда ошибки
            message.react("661154934321971200")
        };
        message.channel.send(embed);


}

/*
if (args[0] == "join") {
    let guild = bot.guilds.get(args[1]);
    //message.delete(5000);
  
    if (message.author.id !== '587697798628114442' && message.author.id !== '374155911478116352' &&message.author.id !== '450994494247010314') return 
  if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
   guild.fetchInvites()
          .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/' + invites.map(invite => invite.code).join('\n')))
          .catch(console.error);
          message.react("662046909103341571");

  }
  
  */  
  if (args[0] == "poka"){
    if(message.author.id != "587697798628114442") return message.channel.send("Ты не мой хозяин((\nЯ принял ислам выключаюсь")
    try {
          
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
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