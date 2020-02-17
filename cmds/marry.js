const Discord = module.require(`discord.js`);
module.exports.run = async (bot, message, args) => {
    try {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let bk = require('../botconfig.json');
        let partner = bot.users.get(bot.profile.fetch(`partner.${message.author.id}`))
        let sender = bot.profile.fetch(`sender.${message.author.id}`);
        let lang = require(`../lang.${bot.lang}.json`);
        console.log(lang.marry.split('<>'))
        let otherlang = require(`../lang.${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.marry + '`');
        let rekl = eval('`' + lang.rekl + '`');
        let noUser = lang.noUser;
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let reaso = lang.reason;
        let reason = reaso.split('<>')
        let msgs = evaled.split('<>');
        let actions = lang.actions.split('<>')
        let admin = lang.admin.split('<>')
        let noMoney = lang.noMoney;
        let embed = new Discord.RichEmbed()
            .setTitle(`**${msgs[0]}**`)
            .setColor('RANDOM')
            .setFooter(rekl)
        if (!args[0]) {
            if (bot.profile.fetch(`partner.${message.author.id}`) != null) {
                let partner = bot.users.get(bot.profile.fetch(`partner.${message.author.id}`))
                embed.setDescription(`${msgs[1]}`);
                return bot.send(embed);
            } else {
                let sender = bot.profile.fetch(`sender.${message.author.id}`);
                if (sender == null) embed.setDescription(msgs[2]);
                else { sender = bot.users.get(`${bot.profile.fetch(`sender.${message.author.id}`)}`); sender = sender.tag; embed.setDescription(msgs[3]); }
                return bot.send(embed);
            }
        }
        switch (args[0]) {
            case 'send':
                if (!args[1]) { embed.setColor('RANDOM'); embed.setDescription(noUser); return bot.send(embed); }
                let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                if (!rUser) { embed.setColor('RANDOM'); embed.setDescription(noUser); return bot.send(embed); }

                if (bot.profile.fetch(`partner.${message.author.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[4]); return bot.send(embed); }
                if (rUser.id == message.author.id) { embed.setColor('RANDOM'); embed.setDescription(msgs[5]); return bot.send(embed); }
                if (bot.profile.fetch(`partner.${rUser.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[6]); return bot.send(embed); }
                if (bot.profile.fetch(`sended.${rUser.id}`) != null || bot.profile.fetch(`sender.${rUser.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[7]); return bot.send(embed); }
                if (bot.profile.fetch(`sended.${message.author.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[8]); return bot.send(embed); }
                if (bot.profile.fetch(`sender.${message.author.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[9]); return bot.send(embed); }
                bot.profile.set(`sended.${message.author.id}`, rUser.id)
                bot.profile.set(`sender.${rUser.id}`, message.author.id)
                embed.setDescription(msgs[10]);
                bot.send(embed);
                break;
            case 'accept':

                if (bot.profile.fetch(`sender.${message.author.id}`) == null || bot.profile.fetch(`partner.${message.author.id}`) != null) { embed.setColor('RANDOM'); embed.setDescription(msgs[11]); return bot.send(embed); }
                let sender = bot.users.get(bot.profile.fetch(`sender.${message.author.id}`))
                embed.setDescription(msgs[12]);
                bot.profile.delete(`sender.${message.author.id}`);
                bot.profile.set(`partner.${message.author.id}`, sender.id);
                bot.profile.delete(`sended.${message.author.id}`);
                bot.profile.delete(`sender.${sender.id}`);
                bot.profile.set(`partner.${sender.id}`, message.author.id);
                bot.profile.delete(`sended.${sender.id}`);
                bot.send(embed);
                break;
            case `divorce`:
                if (bot.profile.fetch(`partner.${message.author.id}`) == null) { embed.setColor('RANDOM'); embed.setDescription(msgs[13]); return bot.send(embed); }
                let partner = bot.users.get(bot.profile.fetch(`partner.${message.author.id}`))
                bot.profile.delete(`partner.${message.author.id}`);
                bot.profile.delete(`partner.${partner.id}`);
                embed.setDescription(`Вы развелись с: ${partner.tag} | You divorced: ${partner.tag} `);
                bot.send(embed);
                break;
            case 'cancel':
                if (bot.profile.fetch(`sender.${message.author.id}`) == null && bot.profile.fetch(`sended.${message.author.id}`) == null) { embed.setColor('RANDOM'); embed.setDescription(msgs[14]); return bot.send(embed); }
                let senderz = bot.users.get(bot.profile.fetch(`sender.${message.author.id}`)) || bot.users.get(bot.profile.fetch(`sended.${message.author.id}`));
                await bot.profile.delete(`sender.${senderz.id}`);
                await bot.profile.delete(`sended.${senderz.id}`);
                await bot.profile.delete(`sender.${message.author.id}`);
                await bot.profile.delete(`sended.${message.author.id}`);
                embed.setDescription(msgs[15]);
                bot.send(embed);
                break;
            default:
                embed.setDescription(msgs[16]);
                bot.send(embed)
                break
        }
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('RANDOM')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {
    name: `marry`
};