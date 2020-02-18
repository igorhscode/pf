const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor("#d18dda") 
    .setDescription(`
Привееет! Я Pink Flame - Твой личный помощник по этому уютному серверу!

Чтобы начать зарабатывать 🍬 монеты на свой баланс, взаимодействовать с участниками, покупать роли и многое другое - посмотри команды ниже! 


${em1} **Эмоции и действия с участниками** ${em2}

pf!hug - обнять одного или всех участников сервера. 
pf!cry - расплакаться. 
pf!sad - начать грустить.
pf!kiss - поцеловать. 
pf!lick - лизнуть. 
pf!smile - улыбнуться.
pf!sexlevel - узнать свой уровень сексуальности.

${em1} **Серверные команды** ${em2}

pf!help - команды для игроков сервера.
pf!adminhelp - команды администрации сервера.
pf!serverinfo - информация сервера.
pf!report - кинуть жалобу на игрока.
pf!translate - перевести с русского на английский и наоборот.

${em1} **Экономика** ${em2}

pf!profile - Информация о пользователе.
pf!level - узнать свой текущий уровень
pf!daily - получить ежедневную награду.
pf!$ - проверить свой баланс конфет.
pf!shop - открыть магазин сервера.
pf!buy Номер роли - купить роль.
pf!work-list - список работ,чтобы работать
pf!work - начать работать`)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "help"
};
