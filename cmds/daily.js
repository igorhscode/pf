const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {


    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Вы уже собрали свою ежедневную награду, подождите еще **${time.hours}ч ${time.minutes}м ${time.seconds}с**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Ежедневная награда`, message.guild.iconURL)
    .setColor("GREEN")
    .setDescription(`<@${message.author.id}>, вы получили ${amount} 🍬`)

    message.channel.send(embed)
    db.add(`candy_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
module.exports.help = {
    name: "daily"
}