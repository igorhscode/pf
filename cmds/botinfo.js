const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  let em1 = message.guild.emojis.find(emoji => emoji.name === "yes")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setDescription(`❯ ${em1} [ссылка](https://vk.com/sw_igor)`)
    message.channel.send(embed)
    msg.react("675762644551991296")
    }
module.exports.help = {
  name: "123"
  }