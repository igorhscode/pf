const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role1 = message.guild.roles.find(role => role.name === "· • ♡ EventMod ♡ • ·")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`** ШЛЯПА **

    Участники Ивента делятся на команды или же по парам. В командах выбирается один ${role1} - объясняющий слова, которые ему напишет в лс ${role1} 
    . За каждое отгаданное слово команда получает одно очко. Нужно объяснить как можно больше слов и стараться не пропускать их. Если ${role1}  при объяснении произносит слово - очко не засчитывается, даже если слово угадали.

    1.1. Запрещено перебивать ${role1} . 
    1.2. Запрещено намеренно сливать ресурсы другому игроку. 
    1.3. Запрещено задерживание своего хода. 
    2.1. Запрещено использовать VIP-привилегии без разрешения ${role1} . 
    2.2. Запрещен Флейм во время игры.`)
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "eventrules2"
};