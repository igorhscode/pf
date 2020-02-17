const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`**Привет! 
    Мы очень рады, что ты присоединился к нам. Надеемся ты останешься у нас надолго! Ниже находится информация о содержимом нашего сервера**`)
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "png2"
};