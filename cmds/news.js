const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
const mess = args.join(" ");
  let embed = new Discord.RichEmbed()
  .setColor("#DB50FF")
  .setTitle("❄RoadToDream 2.0❄")
  .setDescription(mess)
  //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
  message.channel.send(embed)
  //bot.channels.get("548570611044319259").send(embed)
          };
module.exports.help = {
    name: 'news',
  aliases: ["новость"]
};