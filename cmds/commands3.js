const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setDescription(`Имеется вопрос? Не стесняйся, задавай их прямо в чате, модераторы и администраторы сервера с радостью на них ответят. 
    Увидели как участник или модератор нарушает? Отправьте на него жалобу, с помощью команды: **pf!report <@участник> причина**, так же просим вас делать скриншоты или видеозаписи доказательств и прикреплять на них ссылки после указания причины. `)
    message.delete().catch();
    bot.send(embed);

};
module.exports.help = {
   name: "n3"
};