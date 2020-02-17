const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot,message,args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('❌ Вы не можете использовать эту команду!').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, вам нужно ввести допустимое число для уменьшения.`) // if args[0] (first input) is not a number, return.
    db.subtract(`candy_${argsUser.id}`, args[0])
    let bal = await db.fetch(`candy_${argsUser.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`✔️ 🍬 Монеты уменьшились!`, message.author.displayAvatarURL)
    .addField("Игрок", argsUser.username)
    .addField(`Количество`, `${args[0]} 🍬 монет`)
    .addField(`Баланс обновился`, `${bal} 🍬 монет`)
    .setColor("RED") // random = "RANDOM"
    .setFooter("Не забудь взять ежедневный бонус - pf!daily")
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)

}
module.exports.help = {
    name: "-$"
}