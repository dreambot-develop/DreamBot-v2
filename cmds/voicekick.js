const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    try{
        
    let bk = require ('../botconfig.json');    
    let ok = '✅'
    let no = '❌'
    if(!args[0]) return bot.send(`**voicekick** - (Голосование) Кикнуть человека из комнаты\n**Использование:** ${bk.prefix}kick @USER ПРИЧИНА\n**ПРИ ЗЛОУПОТРЕБЛЕНИИ ЭТОЙ КОМАНДОЙ ВЫ БУДЕТЕ ЗАБАНЕНЫ!**`);
    if(args)if(args[0] == 'help') return bot.send(`**voicekick** - (Голосование) Кикнуть человека из комнаты\n**Использование:** ${bk.prefix}voicekick @USER ПРИЧИНА\n**ПРИ ЗЛОУПОТРЕБЛЕНИИ ЭТОЙ КОМАНДОЙ ВЫ БУДЕТЕ ЗАБАНЕНЫ!**`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return bot.send('Пользователь не найден');
    if(!message.member.voiceChannel) return bot.send('Вы не в голосовом канале');
    if(!rUser.voiceChannel) return bot.send('Пользователь не в голосовом канале')
    if(message.member.voiceChannelID != rUser.voiceChannelID) return bot.send('Ваши комнаты не соответствуют;')
    let color = '#fbec5d'// ff2400 - Красный #fbec5d - желтый // 19ff19 зеленый
    let asda  = args.slice(1).join(" ");
    if(!asda) return bot.send('Укажите причину кика\n!kick @User Причина')
    let findchannel = message.guild.channels.get('606143770756513796')
    let evote = new Discord.RichEmbed()
    .setDescription("Войс кик голосование")
    .setColor('#fbec5d')
    .addField("Пользователь",message.author)
    .addField("Хочет кикнуть",`${rUser.user}`)
    .addField('Причина:',asda) 
    .setTimestamp();
    let msg = await message.channel.send(evote);
    await msg.react(ok);
    await msg.react(no);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === ok || reaction.emoji.name === no,{time:15*1000});
    let logchannel = message.guild.channels.get("560106715161427979")
    let emb = new Discord.RichEmbed()
    .setDescription("Войс кик")
    .setTimestamp();
    if(reactions.get(ok).count<1){color = '#ff2400';emb.setColor(color);emb.addField('Неудачная попытка кикнуть',rUser.user);return findchannel.send(emb)}
    if(reactions.get(ok).count>=1){
        color = '#19ff19';
        emb.setColor(color);
        emb.addField("Пользователь",message.author)
        emb.addField("Кикнул",`${rUser.user}`)
        emb.addField('Причина:',asda);
        rUser.voiceChannel.overwritePermissions(rUser,{
            CONNECT:false
        })
        rUser.setVoiceChannel(message.guild.afkChannel)
        logchannel.send(emb)
        findchannel.send(emb)
        rUser.send(`${message.author} Кикнул вас с голосового канала\nЕсли вы считаете что это сделано не справедливо обратитесь к администрации **!report @user text**`);

    };
}catch(err){
    console.log(`VoiceKick\nПроизошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
}
}
module.exports.help = {
    name: "voicekick",
    aliases:['vk']
};