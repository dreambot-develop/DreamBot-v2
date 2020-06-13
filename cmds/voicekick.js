const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    try {
        if (!message.member.hasPermission('MOVE_MEMBERS')) return;
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])),
            reason = args.slice(1).join(' '),
            voicekickEmbed = new Discord.RichEmbed()
                .setColor('FF8A14')
                .setTitle('Блокировка чата')

        if (!kUser || kUser.id === message.guild.me.id) {
            bot.sendErrEmbed(voicekickEmbed, 'Пользователь не найден | Укажите пользователя через @')
            return message.channel.send(voicekickEmbed)
        };
        if (kUser.id == message.author.id) {
            bot.sendErrEmbed(voicekickEmbed, 'Вы не можете кикнуть себя')
            return message.channel.send(voicekickEmbed)
        }
        kUser.setVoiceChannel(null);
        if (!kUser.voiceChannel) {
            bot.sendErrEmbed(voicekickEmbed, `${kUser.user.tag} не в голосовом канале`)
            return message.channel.send(voicekickEmbed)
        }
        if (!reason) reason = 'Не указана';
        voicekickEmbed.addField(`**Администратор ${message.author.tag} **`, `**Выгнал с голосового канала ${kUser.user.tag}**\n**Причина: ${reason}**`)
       



    } catch (err) {

    }
}

module.exports.help = {
    name: 'voicekick',
    aliases: ['vk', 'войскик', 'киквойс', 'уберисьчорт'],
    description: 'Выгоняет участника с голосового канала',
    usages: { '!voicekick @user#0001 ': 'Выгоняет участника с голосового канала' },
    category: 'Модерирование'
}