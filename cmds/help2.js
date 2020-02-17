const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor("#d18dda") 
    .setDescription(`

 ${em1} **Музыкальный Bot Ритм** ${em2}

!play - включит в очередь выбранную композицию.
!np - покажет активную композицию.
!skip - проголосовать за пропуск композиции.
!lyrics - выдает текст песни, если он имеется.
!pause - поставит на паузу текущую композицию.
!resume - продолжит воспроизведение поставленной на паузу композиции.
!queue - покажет очередь.
!stop - остановит бота.
!leave - бот покинет канал.

${em1} **Музыкальный Bot Груви** ${em2}

-play - включить выбранную композицию.
-next - пропустит композицию.
-back - вернет предыдущую композицию.
-song - покажет текущую композицию.
-pause - остановит композицию.
-clear - очистит список.
`)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "help2"
};