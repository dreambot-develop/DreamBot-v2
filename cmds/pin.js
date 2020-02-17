const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Недостаточно прав!')

    let msgid = args[0]

    if (!msgid) return message.channel.send('Укажи ID сообщения!')

    await message.channel.fetchMessage(msgid)
        .then(async msg => {
            if (!msg) return message.channel.send('Сообщение не найдено')
            await msg.pin()
            message.react("662046909103341571");
        }).catch(console.error)

}

module.exports.help = {
    name: 'pin',
        aliases: ["закрепить",]
}