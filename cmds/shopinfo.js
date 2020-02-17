const Discord = require('discord.js')
const db = require('quick.db')
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(role => role.name === "Пушистая")
let role2 = message.guild.roles.find(role => role.name === "Хомячок")
let role3 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы тяночку.")
let role4 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы куна.")
let role5 = message.guild.roles.find(role => role.name === "Твоя лубоффф")
let role6 = message.guild.roles.find(role => role.name === "Сын маминой подруги")
let role7 = message.guild.roles.find(role => role.name === "sleepy baby 🍒")
let role8 = message.guild.roles.find(role => role.name === "save me in your heart 💗")
let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setTitle(`${bot.user.username} Магазин!`)
    .setDescription(`1. ${role} - 13000 🍬
    2. ${role2} - 10000 🍬
    3. ${role3} - 7800 🍬
    4. ${role4} - 5000 🍬
    5. ${role5} - 8000 🍬
    6. ${role6} - 6700 🍬
    7. ${role7} - 9000 🍬
    8. ${role8} - 7800 🍬
Чтобы купить роль, используй команду pf!buy номер`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
message.channel.send(embed)

}
module.exports.help = {
    name: "shop"
}