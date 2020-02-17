const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`❌ У вас нет прав`);
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("❌ Вы не указали пользователя");
    if(!rUser) return bot.send("❌ Пользователь не найден");
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`❌ нее... Вы не можете дать ему бан!`);
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setDescription("Бан")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Забанил",`${rUser.user.username}`);
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
};