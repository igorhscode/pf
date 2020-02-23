const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart3")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let info = message.guild.channels.find(channel => channel.name === "┌📖руководство")
    let rules = message.guild.channels.find(channel => channel.name === "├📚правила")
    let news = message.guild.channels.find(channel => channel.name === "├📰новости")
    let giverole = message.guild.channels.find(channel => channel.name === "├🎯получение-ролей") 
    let roles = message.guild.channels.find(channel => channel.name === "⎩🔖роли")
    let events = message.guild.channels.find(channel => channel.name === "┌🎉ивенты")
    let c8 = message.guild.channels.find(channel => channel.name === "├🌸общение")
    let nak = message.guild.channels.find(channel => channel.name === "├🚩﹥наказания")
    let report = message.guild.channels.find(channel => channel.name === "├🚨жалобы")
    let sugg = message.guild.channels.find(channel => channel.name === "⎩📁предложения")
    let spam = message.guild.channels.find(channel => channel.name === "├🍄спам")
    let commands = message.guild.channels.find(channel => channel.name === "├🔨команды-сервера")
    let botchat = message.guild.channels.find(channel => channel.name === "└🍨bot-chat")
    let music = message.guild.channels.find(channel => channel.name === "⟦🎵⟧выбирай-песенку")
let role1 = message.guild.roles.find(role => role.name === "🔥 Pink Flame")
let role2 = message.guild.roles.find(role => role.name === "・ ☄️ › Pink Flame")
let spaced = message.guild.emojis.find(emoji => emoji.name === "space")

    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`Приветствую тебя в ${role1} ♡!

    ${em3} Приветствую вас, ${role2} ! Добро пожаловать к нам, присаживайся и давай знакомиться! ${em1} Я - Пинки! Твой хороший помощник и добрый друг.
    ${em2} Мы рады каждому человеку на нашем сервере! 
    
    Каналы категории **информация: ** ${em2}
    ▸ ${info} - Твой навигатор по серверу.
    ▸ ${rules} - Правила или же конституция сервера.
    ▸ ${news} - публикация изменений на сервере.
    ▸ ${shop} - магазин сервера.
    ▸ ${giverole} - канал, основанный для получения ролей.
    ▸ ${roles} - роли сервера.

    Каналы категории **чаты: ** ${em1}
    ▸ ${nak} - наказания.
    ▸ ${events} - Анонсы ивентов сервера.
    ▸ ${c8} - Основное общение на любые темы.
    ▸ ${spam} - Канал, созданный для флуда.
    ▸ ${commands} - Информация о командах бота.
    ▸ ${report} - Здесь вы можете оставить жалобы на игроков.
    ▸ ${sugg} - Здесь вы можете оставить предложения по поводу улучшения сервера.
    
    Каналы в категории **музыка:** ${em1}
    ▸ ${music} - чат для музыки`)
    .setImage("https://images-ext-1.discordapp.net/external/fjy1GLT7hrMRpNzOM5OEyJDJbe8GLU9651OT6Z-ftrw/https/avatanplus.com/files/resources/mid/5a7864f713d0b161664a6529.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "new1"
};
