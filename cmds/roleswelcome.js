const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
let rolef1 = message.guild.roles.find(role => role.name === "· • ♡ Pink control ♡ • ·")
let roleadm = message.guild.roles.find(role => role.name === "🦊• Flamee.")
let rolef4 = message.guild.roles.find(role => role.name === "・🔑 › DEV")
let rolef6 = message.guild.roles.find(role => role.name === "· • ♡ Pink moderator ♡ • ·")
let rolef5 = message.guild.roles.find(role => role.name === "· • ♡ EventMod ♡ • ·")
let role1 = message.guild.roles.find(role => role.name === "◦ 🚀 › Nitro Booster")
let rolefgender1 = message.guild.roles.find(role => role.name === "› FLAME MAN ♂")
let rolefgender2 = message.guild.roles.find(role => role.name === "› FLAME GIRL ♀")
let rolefef = message.guild.roles.find(role => role.name === "◦  🎉 › Event")
let rolefuch = message.guild.roles.find(role => role.name === "◦ ☄️ › Pink Flame")
let r1 = message.guild.roles.find(role => role.name === "🌝Солнечный!!")
let r2 = message.guild.roles.find(role => role.name === "🌸• Анимешник")
let r3 = message.guild.roles.find(role => role.name === "День рождение! 🎂")
let r4 = message.guild.roles.find(role => role.name === "🎩 Шляпник")
let r5 = message.guild.roles.find(role => role.name === "🔪 Мафия")
let r6 = message.guild.roles.find(role => role.name === "Активный")
let r7 = message.guild.roles.find(role => role.name === "🌙Лунтик")
let r8 = message.guild.roles.find(role => role.name === "🖊️ • 𝘿𝙚𝙨𝙞𝙣𝙜𝙚𝙧")
let r9 = message.guild.roles.find(role => role.name === "Cонливый 💤")
let r10 = message.guild.roles.find(role => role.name === "📹 • Streamer")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor([255,255,0])
    .setDescription(`
    Ну а теперь давай перейдём к нашим ролям и достижениям на сервере <3 

   ${em1} **Администрация**: ${em2}

▸ ${roleadm} — Главная администрация сервера
▸ ${rolef6} — Старшая администрация
▸ ${rolef1} — Младшая администрация
▸ ${rolef4} — Разработчик сервера
▸ ${rolef5} — Ивентеры сервера

${em1} **Хорошая поддержка сервера** ${em2}

▸ ${role1} — дается за буст сервера.
▸ ${r8} - дается дизайнерам сервера.
▸ ${r10} - медия сервера.

${em1} **Основные роли** ${em2}

▸ ${r9} — Выдается за сон в голосовых чатах. 
▸ ${r7} — Даётся участникам, которые проявляют наибольшую активность ночью.
▸ ${r6} — Выдается самым активным участникам сервера.
▸ ${r3} — Выдается участникам, у которых День рождение!
▸ ${r1} — Даётся участникам, которые проявляют наибольшую активность утром.
▸ ${r2} — Даётся лучшим анимешникам.
▸ ${rolefef} — Даётся участникам ивента.
▸ ${rolefuch} — Даётся при входе на сервер.

${em1} **Ивентовые роли:** ${em2}

▸ ${r4} — Даётся за 10 побед в Шляпе.
▸ ${r5} — Даётся за 10 побед в Мафии.

${em1} _**Гендерные роли:**_ ${em2}

▸ ${rolefgender1} - выдается парням сервера

▸ ${rolefgender2} - выдается девушкам сервера

**Примечание! 
Роли будут пополняться**`)
.setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
message.delete().catch();
bot.send(embed);
};
module.exports.help = {
name: "new2"
};