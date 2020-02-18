const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor("#d18dda")
    .setDescription(`${em1} **Мод.команды:** ${em2}
**pf!say** - сообщение Отправляется сообщение от лица бота.
   ** pf!clear** {число сообщений от 1 до 10} - число Очищает чат от флуда или сообщений иного характера.
   ** pf!new [новости]** {число сообщений от 1 до 10} - публикуется новость.

${em1} **Виды наказания:** ${em2}
    **pf!ban** - Выдается перманентный бан аккаунта.
    **pf!kick** - Кикает - участника.
    **pf!mute {время в сек}** - даёт временный мут.
     **pf!unmute** - Убирает мут аккаунта.
    **pf!warn** - Выдается предупреждение аккаунту.
    **pf!unwarn** - Убирает предупреждение аккаунту.
    **pf!gamewarn** - Выдается игровое предупреждение аккаунту.
    **pf!gameunwarn** - Убирает игровое предупреждение аккаунту.

${em1} **Экономика:** ${em2}
    **pf!+$ и pf!-$** - Может добавить денег или убрать денежные средства.

${em1} **Ивенты:** ${em2}
    **pf!mafia [время проведения]** - публикается информация о ивентах.
    **pf!шляпа [время проведения]** - публикается информация о ивентах.
    **pf!poll [предложение для голосования]** - голосование для ивентах.
   
    `)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    bot.send(embed);
};
module.exports.help = {
   name: "adminhelp"
};
