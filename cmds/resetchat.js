const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    try {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        let resetembed = new Discord.RichEmbed()
            .setColor('4DFFD4')
        let channelslowmode = message.channel.rateLimitPerUser,
            channelpos = message.channel.calculatedPosition,
            channelparent = message.channel.parentID;
        await message.channel.clone().then(async channel => {
            await message.channel.parentID ? channel.setParent(channelparent) : true;
            await channel.setPosition(channelpos)
            await channel.setRateLimitPerUser(channelslowmode);
            resetembed.setTitle('Канал был успешно пересоздан')
            await channel.send(resetembed)
        }).catch(err => {
            bot.logsErr(err)
        });
        await message.channel.delete()

    } catch (err) {
        bot.logsErr(err)
    }
};
module.exports.help = {
    name: 'resetchat',
    aliases: ['rc'],
    category: 'Модерирование',
}; 