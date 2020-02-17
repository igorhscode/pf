const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor("#d18dda")
    .setDescription(` **Доступные команды:** 
    pf!ban - Выдается перманентный бан аккаунта
    pf!clear - число Очищает чат от флуда или сообщений иного характера
    pf!kickКикает - участника
    pf!mute - время в секундах Выдается мут аккаунта
    pf!unmute - Убирает мут аккаунта
    pf!say - сообщение Отправляется сообщение от лица бота 
    pf!warn - Выдается предупреждение аккаунту
    pf!unwarn - Убирает предупреждение аккаунту
    pf!gamewarn - Выдается игровое предупреждение аккаунту
    pf!gameunwarn - Убирает игровое предупреждение аккаунту
    pf!+$ и pf!-$ - Может добавить денег или убрать денежные средства
    `)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    bot.send(embed);
};
module.exports.help = {
   name: "adminhelp"
};