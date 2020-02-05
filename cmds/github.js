const Discord = require("discord.js");
module.exports = {
  help: {
     name: 'github',
     aliases: [""],
     description: "Поиск пользователя на github.",
     enabled: true
  },
  run: async (bot, message, args) => {
  if(!args[0]) return; require("node-fetch")(`https://api.github.com/users/${args[0]}`).then(res => res.json()).then(json => {
  if(!json.login) return
  let embed = new Discord.RichEmbed()
  .setColor("BLUE") // Замените на свой цвет.
  .setAuthor(args[0], json.avatar_url, json.html_url)
  .setDescription(`Имя: ${json.name ? json.name : "Не найдено."} | ${json.company ? json.company : "Компании нет."}\nБиография: ${json.bio ? json.bio : "Нет."}`)
  .addField('Статистика:', `Кол-во открытых репозиторий: ${json.public_repos} | Гистов: ${json.public_gists}\nПодписок: ${json.following} | Подписчиков: ${json.followers}`)
  if(json.blog){ embed.addField('_ _', `[Блог](${json.blog}) | [Ссылка на профиль](${json.html_url})`)}
  bot.send(embed)
  })   
 }
}