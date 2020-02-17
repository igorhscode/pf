const Discord = require('discord.js')
const fs = require("fs");
const db = require('quick.db')
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author
let candy = await db.fetch(`candy_${argsUser .id}`)
if (candy ===  null)  candy=  0;
let embed = new Discord.RichEmbed()
.setColor("#e8baf3")
.setAuthor(message.guild.iconURL)
.setDescription("Баланс")
.addField('Игрок', `${argsUser}`)
.addField("Имеет",`${candy} 🍬`)
.setFooter("Не забудь взять ежедневный бонус - pf!daily")
bot.send(embed);  
};
module.exports.help = {
    name: "$"
}