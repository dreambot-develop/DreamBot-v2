
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MjI4NTk1MDAzNDQ0NDI5OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc0MDgyODI0fQ.QvX-4Td26PTfsl9gXO9Y279WK3zIjYiB4Eo9GoGuyUQ');
const SDC = require('sdc-api');
const client = new SDC('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MjI4NTk1MDAzNDQ0NDI5OCIsInBlcm1zIjowLCJpYXQiOjE1NzcxMTYxMDJ9.a4-2KNbVvKD_917PMsuS_sSX4JWX-LQO-ElF5HaKkGU')
const strftime = require('strftime'); // Без него тут никак xd
const vremya_po_msk = strftime.timezone(180); // окда
module.exports = async (bot) => {
bot.user.setStatus("online"); // сам ставишь idle, dbd, invisible или online
setInterval(function(){
    switch(Math.ceil(Math.random()*7+1)){ // 7-число статусов! Его надо менять тоже
      case 1:
      bot.user.setActivity(`на ${bot.users.size} участника`,{ type: 'WATCHING'})
      break;
      case 2:
      bot.user.setActivity(`на ${bot.guilds.size} сервер`,{ type: 'WATCHING'})
      break;
      case 3:
      bot.user.setActivity(`VimeWorld.ru`,{ type: 'PLAYING'})
      break;
      case 4:
      bot.user.setActivity(`Minecraft`,{ type: 'PLAYING'})
      break;
      case 5:
      bot.user.setActivity(`Spotify`,{ type: 'LISTENING'})
      break;
      case 6:
      bot.user.setActivity(`https://discord.gg/uX8PdJX`,{ type: 'WATCHING'})
      break;
      case 7:
      bot.user.setActivity(`на ${bot.users.size} участника`,{ type: 'WATCHING'})
      break;
}
  },5000);
      dbl.postStats(bot.guilds.size);

    console.log(`Бот работает под ником: ${bot.user.tag}!`);
    bot.generateInvite(['ADMINISTRATOR']).then(link =>{
      console.log('Ссылка на бота:', link);
    })

setInterval(function() {
bot.channels.get('664961353819095101').setName(`🕥 ${vremya_po_msk('%H:%M', new Date())} по МСК`);
}, 60000); // Время обновляется каждую минуту
// Всё!
client.setAutopost(bot)


bot.generateInvite(["ADMINISTRATOR"]).then(link => {
console.log(link);
});
async function test1() {
bot.channels.find(c => c.id === "664961588029292554").setName(`В сети: ${bot.guilds.get('502949305372377096').presences.size}`);
}; setInterval(test1, 30000)
}