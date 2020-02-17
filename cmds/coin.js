const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
 let items = ['Решка',
 'Орёл']
 let item = items[Math.floor(Math.random()*items.length)];
    message.channel.send(item);
};
module.exports.help = {
    name: "coin",
    aliases: ["монетка"]
};