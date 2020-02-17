const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
let c1 = message.guild.channels.find(channel => channel.name === "┌📖руководство")
let c2 = message.guild.channels.find(channel => channel.name === "├📚правила")
let c3 = message.guild.channels.find(channel => channel.name === "├📰новости")
let crole = message.guild.channels.find(channel => channel.name === "├🎯получение-ролей") 
let c4 = message.guild.channels.find(channel => channel.name === "└🔖роли")
let c6 = message.guild.channels.find(channel => channel.name === "┌🎉ивенты")
let c8 = message.guild.channels.find(channel => channel.name === "├🌸общение")
let ci = message.guild.channels.find(channel => channel.name === "├🚨жалобы")
let cl = message.guild.channels.find(channel => channel.name === "├📁предложения")
let c9 = message.guild.channels.find(channel => channel.name === "├🍄спам")
let cc = message.guild.channels.find(channel => channel.name === "├🔨команды-сервера")
let c10 = message.guild.channels.find(channel => channel.name === "└🍨bot-chat")
let c11 = message.guild.channels.find(channel => channel.name === "⟦🎵⟧выбирай-песенку")
let cshop = message.guild.channels.find(channel => channel.name === "├🛒магазин") 

    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`В данном категории, вы можете узнать много нужного и полезного о сервере <3 
    Давай перейдём уже к нашим каналам! 
    
    Каналы категории **информация: ** ${em2}
    ▸ ${c1} - ты тут.
    ▸ ${c2} - Правила или же конституция сервера.
    ▸ ${c3} - публикация изменений на сервере.
    ▸ ${cshop} - магазин сервера
    ▸ ${crole} - канал, основанный для получения ролей.
    ▸ ${c4} - роли сервера

    Каналы категории **чаты: ** ${em1}

    ▸ ${c6} - Анонсы ивентов сервера.
    ▸ ${c8} - Основное общение на любые темы.
    ▸ ${c9} - Канал, созданный для флуда.
    ▸ ${cc} - Информация о командах бота.
    ▸ ${ci} - Здесь вы можете оставить жалобы на игроков.
    ▸ ${cl} - Здесь вы можете оставить предложения по поводу улучшения сервера.
    ▸ ${c10} - Текстовый канал, созданный для взаимодействия с ботом.
    
    Каналы в категории **музыка:** ${em1}
    ▸ ${c11} - чат для музыки`)
    .setImage("https://images-ext-1.discordapp.net/external/fjy1GLT7hrMRpNzOM5OEyJDJbe8GLU9651OT6Z-ftrw/https/avatanplus.com/files/resources/mid/5a7864f713d0b161664a6529.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "new1"
};