const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.voiceChannel) return bot.send(`**${message.author} зайдите в голосовой канал**`);
    let pid = "642865170808438815";
    if(message.member.voiceChannel.name.toLowerCase().indexOf('duo') == -1 && message.member.voiceChannel.name.toLowerCase().indexOf('squad') == -1 && message.member.voiceChannel.parentID != pid) return bot.send(`**${message.author} Зайдите в предназначеный для этого канал**`)
    let msg  = args.join(" ");
    if(!msg) return bot.send('**Использование !fpp ADR MAP**');
    let kma = message.member.voiceChannel.members.map(m => m.id)
    let num = parseInt(message.member.voiceChannel.userLimit - kma.length);
    if(num <= 0) return bot.send(`**Комната ${message.member.voiceChannel.name} заполнена**`);
    message.delete();
    let findchannel = bot.channels.get('642865170808438815')
    let vid = message.member.voiceChannel.members.map(m => m.id)
    let usrs = '';
    let lnk;
    for(let i = 0;i<vid.length;i++){//Перебераем массив
        usrs+=`<@${vid[i]}>\n`//Добавляем каждого участника канала в массив
    }
    findchannel.send(`${message.author} Ваше приглашение обрабатывается`).then(msg => msg.delete(5*1000))
    
        message.member.voiceChannel.createInvite().then((invite) =>{
        lnk = invite.code
    
    let color = "#0B0B0B";
    let atach = `https://cdn.glitch.com/1bb20dac-4257-4088-b7ef-824d51cd951a%2F${num}FPP.png?v=1563391381394`
    if(message.member.voiceChannel.parentID == pid){
        color = "#ffff33"
        atach = `https://cdn.glitch.com/1bb20dac-4257-4088-b7ef-824d51cd951a%2Fpremium.png?v=1563391412437`
    };
    if(!atach) return;
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`В поисках +${num} FPP в ${message.member.voiceChannel.name}`,message.author.avatarURL)
    .setDescription(`<@${message.author.id}>`)
    .addField(`▫ **${msg}**`,`Зайти: https://discord.gg/${lnk}/ ✅`)
    .addField(`Участники канала:`,usrs)
    .setThumbnail(atach)
    .setTimestamp()
    findchannel.send(embed)
});
    }catch(err){
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    }

};
module.exports.help = {
    name: "fpp",
    aliases: ["f"]
};