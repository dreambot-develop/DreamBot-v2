
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
      

    console.log(`Бот работает под ником: ${bot.user.tag}!`);
    bot.generateInvite(['ADMINISTRATOR']).then(link =>{
      console.log('Ссылка на бота:', link);
    })





});
