const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("❌ Вы не указали пользователя");
    if(!rUser) return bot.send("❌ Пользователь не найден");
    if(!args[1]) return bot.send("❌ Укажите время в секундах");
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Заглушил",`${rUser.user.username}`);
    
    message.channel.send(embed);

    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false,
                SPEAK:false
            });
        });
    };
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply("❌ нее... Вы не можете дать ему мут!");
    if(rUser.roles.has(role.id)) return bot.send("❌ Этот пользователь уже не может говорить");
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });           
        
        rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};