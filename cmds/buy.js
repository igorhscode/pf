const Discord =  require('discord.js')
const db =  require('quick.db')
module.exports.run = async (bot,message,args) => {
    
    let em3 = message.guild.emojis.find(emoji => emoji.name === "yes")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "not")
    let author = db.fetch(`candy_${message.author.id}`)

    if (args[0] == '1') {
        if (author < 13000) return message.channel.send(`${em4} У вас не хватает 🍬 для покупки этой роли`) // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Хомячок"))

        db.subtract(`candy_${message.author.id}`, 13000)
        message.channel.send(message.author.tag + `${em3} Вы успешно купили данную роль за  13000 🍬`)
    } else if(args[0] == '2') {
        if (author < 10000) return message.channel.send(`${em4} У вас не хватает 🍬 для покупки этой роли`) // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Твоя лубоффф"))

        db.subtract(`candy_${message.author.id}`, 10000)
        message.channel.send(message.author.tag + `${em3} Вы успешно купили данную роль за  10000 🍬`)
    } else if(args[0] == '3') {
        if (author < 14000 ) return message.channel.send(`${em4} У вас не хватает 🍬 для покупки этой роли`) // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "эхххъ сейчас бы тяночку."))

        db.subtract(`candy_${message.author.id}`, 14000 )
        message.channel.send(message.author.tag + `${em3} Вы успешно купили данную роль за 14000  🍬`)
    } else if(args[0] == '4') {
        if (author < 12000) return message.channel.send(`${em4} У вас не хватает 🍬 для покупки этой роли`) // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "эхххъ сейчас бы куна."))

        db.subtract(`candy_${message.author.id}`, 12000)
        message.channel.send(message.author.tag + `${em3} Вы успешно купили данную роль за  12000 🍬`)
    } else if(args[0] == '5') {
        if (author < 11700) return message.channel.send(`${em4} У вас не хватает 🍬 для покупки этой роли`) // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "save me in your heart 💗"))

        db.subtract(`candy_${message.author.id}`, 11700)
        message.channel.send(message.author.tag + `${em3} Вы успешно купили данную роль за  11700 🍬`)
        }
}
module.exports.help = {
    name: "buy"
}
