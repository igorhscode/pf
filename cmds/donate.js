const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let rolef1 = message.guild.roles.find(role => role.name === "◦ ☄️ › Pink Flame")
let roleved = message.guild.roles.find(role => role.name === "· • ♡ EventMod ♡ • ·")
let rolef4 = message.guild.roles.find(role => role.name === "🔽 𝙁𝙇𝘼𝙈𝙀  𝙑𝙄𝙋 🍍")
let rolef5 = message.guild.roles.find(role => role.name === "🔼 𝙁𝙇𝘼𝙈𝙀  𝙀𝙇𝙄𝙏𝙀 🍓")
let rolef6 = message.guild.roles.find(role => role.name === "⭐️𝙁𝙇𝘼𝙈𝙀  𝙎𝙋𝙊𝙉𝙎𝙊𝙍  🍕")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`_**Нихао, ${rolef1}**_! 

    Наш сервер хочет обрадовать вас появлением магазина 
    на нашем уютном сервере! Теперь можно получить валюту, свою собственную роль, 
    личную комнату для друзей и помочь серверу в развитии за ту же валюту или оплатить 
    реальными деньгами.
    
    **Спонсорство**
    
    _**${rolef6}**_ - 250 рублей навсегда
    Отображение справа, возможность заходить в переполненные комнаты, 
    доступ к донат войсам и чатам, создание двух личных ролей, личная комната, получение 30 уровня сервера. + 300к 🍬 для покупок ролей. 
    Возможность провести игру не имея роль ${roleved}. Возможность добавить личные команды
    
    _**${rolef5}**_ - 150 рублей навсегда
    Отображение справа, доступ к переполненным комнатам, личная комната, донат войсам и чатам, получение 20 уровня сервера. + 200к 🍬 для покупок ролей. 
    
    _**${rolef4}**_ - 50 рублей навсегда 
    Отображение справа, доступ к донат войсам и чатам, получение 10 уровня сервера. + 100к 🍬 для покупок ролей. 
    
    Чтобы приобрести какую-либо привилегию, комнату, валюту или роли
    нужно написать администратору сервера 
`)
.setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
bot.send(embed);
};
module.exports.help = {
name: "shopwel"
};