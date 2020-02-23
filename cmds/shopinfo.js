const Discord = require('discord.js')
const db = require('quick.db')
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
let role1 = message.guild.roles.find(role => role.name === "Хомячок")
let role3 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы тяночку.")
let role4 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы куна.")
let role2 = message.guild.roles.find(role => role.name === "Твоя лубоффф")
let role5 = message.guild.roles.find(role => role.name === "save me in your heart 💗")
let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setTitle(`${bot.user.username} Магазин!`)
    .setDescription(`1. ${role1} - 13000 🍬
    2. ${role2} - 10000 🍬
    3. ${role3} - 14000 🍬
    4. ${role4} - 12000 🍬
    5. ${role5} - 11700 🍬

Чтобы купить роль, используй команду pf!buy номер`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
message.channel.send(embed)

}
module.exports.help = {
    name: "shop"
}
