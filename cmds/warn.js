const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) =>{
    let em3 = message.guild.emojis.find(emoji => emoji.name === "yes")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "not")
    try{
        function send (msg){
            message.channel.send(msg);
        }
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${em4} У вас нет прав`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!args[0]) return send(`${em4} Вы не указали пользователя`);
    if(!rUser) return send(`${em4} Пользователь не найден`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em4} нее... Вы не можете дать ему предупреждение!`);

    profile[rUser.id].warns++;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setDescription("Предупреждение")
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение",`${rUser.user.username}`)
    .addField("Количество предупреждений",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
    if(err.name === "ReferenceError")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
}

};
module.exports.help = {
    name: "warn"
};
