const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "◦  🎉 › Event")
    let role1 = message.guild.roles.find(role => role.name === "· • ♡ EventMod ♡ • ·")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`❌ У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`❌ Вы не указали Содержимое!`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**⠀𝙋𝙞𝙣𝙠 𝙁𝙖𝙢𝙞𝙡𝙮 𝙈𝙖𝙛𝙞𝙖**
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${em1} Ведущий: <@${message.author.id}>
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${em2} Время проведения: ** ${botmessage} **
    
     В самом начале ${role1} распределяет роли в лс участникам. Мирный житель, Полицейский, Доктор, Мафия и Дон. Или же вас могут добавить в закрытые чаты ролей.Если Вам не написали в личные сообщения роль, то Вы являетесь мирным жителем. 
    
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀. ︶︶︶. ̥ᔗ ${em1} [Подключиться](https://discord.gg/KZ3e8AR) ${em2} ᔚ ̥ . ︶︶︶.
    
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Победа ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Участие⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀— 300 🍬 ⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀— 50 🍬⠀⠀⠀⠀⠀⠀
    `)
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "mafia"
};
