

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    try {
        let coins = bot.lprofile.fetch(`coins_${message.author.id}_${message.guild.id}`)
        let bal = coins
        let bk = require('../botconfig.json');
        let embed = new Discord.RichEmbed()
        let rand = Math.floor(Math.random() * (100 - 0) + 0)
        function isNumeric(n) {
       return !isNaN(parseFloat(n)) && isFinite(n);
        };

        /////////////////////////////////////////////////////// RES //////////////////////////////////////////////////////
       // let rand = Math.floor(Math.random() * (100 - 0) + 0)                                                          //
        let rand2 = Math.floor(Math.random() * (100 - 10) + 10)                                                         //
        let win_60 = 2                                                                                                  //
        let win_90 = 4                                                                                                  //
        let win_100 = 10                                                                                                //
        ////////////////////////////////////////////////////// MATH ////////////////////////////////////////////////////////////////////////
        rand2 + 13;                                                                                                                       //
        if (rand2 > 100) rand2 = 100;                                                                                                     //
        let stavka = parseInt(args[0])                                                                                                    //
        if (!args[0] || !isNumeric(Math.floor(stavka))) { embed.setDescription(`Укажите ставку`); return bot.send(embed); }               //
        if (coins <= Math.floor(stavka)) { embed.setDescription(` У вас не достаточно средств **${bal}**`); return bot.send(embed); }     //
        if (Math.floor(stavka) <= 10) { embed.setDescription(`Минимальная ставка 10`); return bot.send(embed); }                          //
        let check;                                                                                                                        //
        if(rand2 < 60) {                                                                                                                  //
            check = 0                                                                                                                     //
            return Check2(check)                                                                                                          //
        }                                                                                                                                 //
                                                                                                                                          //
        if(rand > rand2 || rand < rand2) {                                                                                                //
            check = rand2                                                                                                                 //
            return Check2(check)                                                                                                          //
        } else {                                                                                                                          //
            rand2 = rand2 - 1                                                                                                             //
            check = rand2                                                                                                                 //
            return Check2(check)                                                                                                          //
        }                                                                                                                                 //
        ////////////////////////////////////////////////////// MATH ////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////// RESULT //////////////////////////////////////////////////////////////
        function Check2(res) {                                                                                                            //
            if(res === 0) {                                                                                                               //
                embed.setDescription(`Вы проигали :( Попробуйте ещё раз позже`);                                                          //                                  //
                bot.lprofile.subtract(`coins_${message.author.id}_${message.guild.id}`, Math.floor(stavka));                              //
                embed.setColor(`#36393f`)                                                                                                 //
                return bot.send(embed);                                                                                                   //
            }                                                                                                                             //
            if(res === 100) {                                                                                                             //
                bot.lprofile.add(`coins_${message.author.id}_${message.guild.id}`, Math.floor(stavka * 10) - Math.floor(stavka));         //
                embed.setColor('#10e250');                                                                                                //
                embed.setDescription(`Вам выпало ${res} \n Вы выиграли ${Math.floor(stavka * 5)}`);                                       //                                                      //
                return bot.send(embed);                                                                                                   //
            }                                                                                                                             //
            if(res >= 90) {                                                                                                               //
                bot.lprofile.add(`coins_${message.author.id}_${message.guild.id}`, Math.floor(stavka * 4) - Math.floor(stavka));          //
                embed.setColor('#10e250');                                                                                                //
                embed.setDescription(`Вам выпало ${res} \n Вы выиграли ${Math.floor(stavka * 4)}`);                                       //                                                     //
                return bot.send(embed);                                                                                                   //
            }                                                                                                                             //
            if(res >= 60) {                                                                                                               //
                bot.lprofile.add(`coins_${message.author.id}_${message.guild.id}`, Math.floor(stavka * 2) - Math.floor(stavka));          //
                embed.setColor('#10e250');                                                                                                //
                embed.setDescription(`Вам выпало ${res} \n Вы выиграли ${Math.floor(stavka * 2)}`);                                       //                                                     //
                return bot.send(embed);                                                                                                   //
            }                                                                                                                             //
        }                                                                                                                                 //
        ////////////////////////////////////////////////////////////// RESULT //////////////////////////////////////////////////////////////

    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {
    name: "slroll",
    aliases: ["лролл", 'лроль', 'лрулетка']
};