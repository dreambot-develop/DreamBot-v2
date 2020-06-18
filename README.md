# Внимание
DreamBot v2 больше не поддерживается разработчиком **[MrLivixx](https://github.com/MrLivixx)**. Данная версия бота настолько устарела, что началась разработка третей версии бота. **Все найденые токены в боте не рабочие, не пытайтесь что-то с ними делать**, но никто вам не запрещает отправлять нам Pull Request или Issue. ¯\\\_(ツ)\_/¯

# DreamBot
Полный исходный код бота DreamBot

<a href="https://top.gg/bot/572285950034444298" >
  <img src="https://top.gg/api/widget/status/572285950034444298.svg?noavatar=true" alt="DreamBot" />
</a>
<a href="https://top.gg/bot/572285950034444298" >
  <img src="https://top.gg/api/widget/servers/572285950034444298.svg?noavatar=true" alt="DreamBot" />
</a>
<a href="https://top.gg/bot/572285950034444298" >
  <img src="https://top.gg/api/widget/upvotes/572285950034444298.svg?noavatar=true" alt="DreamBot" />
</a>
<a href="https://top.gg/bot/572285950034444298" >
  <img src="https://top.gg/api/widget/lib/572285950034444298.svg?noavatar=true" alt="DreamBot" />
</a>
<a href="https://top.gg/bot/572285950034444298" >
  <img src="https://top.gg/api/widget/owner/572285950034444298.svg?noavatar=true" alt="DreamBot" />
</a>

# Библиотеки
* База данных - quick.db
* Библиотека для Discord - discord.js (**v11**)

# Как запустить бота? 
* Для начала, установите все необходимые библиотеки: ``npm i``
<br>P.S. Бот использует quick.db (как говорилось выше). Для установки этой библиотеки на ОС Windows нужны вспомогательные библиотеки от Visual Studio.
* Укажите токен и прочее в файле ``.env``
* Также, откройте файл ``botconfig.json`` и настройте под себя префикс, укажите свой ID.
* В поле ``bonus`` пишите число которое будет выдаваться людям при прописывании комадны ``.bonus``
* В ``cooldown`` пишите время до следующего бонуса.
* Для запуска бота используйте ``node bot.js``
<br>Для запуска через **pm2**:
```diff
+ Добавление и запуск: pm2 start bot.js --name dreambot-v2
+ Просто запуск: pm2 start dreambot-v2
+ Перезагрузка: pm2 restart/reload dreambot-v2
+ Остановка работы: pm2 stop dreambot-v2
+ Удаление бота (из pm2): pm2 delete dreambot-v2
+ Автозапуск при старте системы: pm2 save && pm2 startup
```
P.S. Если вы запускаете команду автозапуска не из root-пользователя, убедитесь что у вас есть права на sudo
<br>Либо обратитесь к администратору системы для прописания команды, которую вам даст pm2
