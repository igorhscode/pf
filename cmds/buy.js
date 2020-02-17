const Discord =  require('discord.js')
const db =  require('quick.db')
module.exports.run = async (bot,message,args) => {
    
    
    let author = db.fetch(`candy_${message.author.id}`)
   if(!args[0]) {
    return message.channel.send("❌ Вы не правильно написали команду. Попробуйте так: `pf!buy [номер роли]`")
   }
    if (args[0] == '1') {
        if (author < 13000) return message.channel.send('❌ У вас не хватает 13000 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Пушистая"))
        db.subtract(`candy_${message.author.id}`, 13000)
        message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `13000 🍬 `')
    } else if(args[0] == '2') {
        if (author < 10000) return message.channel.send('❌ У вас не хватает 10000 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Хомячок"))

        db.subtract(`candy_${message.author.id}`, 10000)
        message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `10000 🍬 `')
    } else if(args[0] == '3') {
        if (author < 7800 ) return message.channel.send('❌ У вас не хватает 7800 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "эхххъ сейчас бы тяночку."))

        db.subtract(`candy_${message.author.id}`, 7800 )
        message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `7800  🍬 `')
    } else if(args[0] == '4') {
        if (author < 5000) return message.channel.send('❌ У вас не хватает 5000 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "эхххъ сейчас бы куна."))

        db.subtract(`candy_${message.author.id}`, 5000)
        message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `5000 🍬 `')
    } else if(args[0] == '5') {
        if (author < 8000) return message.channel.send('❌ У вас не хватает 8000 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Твоя лубоффф"))

        db.subtract(`candy_${message.author.id}`, 8000)
        message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `8000 🍬 `')
    } else if(args[0] == '6') {
        if (author < 6700) return message.channel.send('❌ У вас не хватает 6700 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "Сын маминой подруги"))

        db.subtract(`candy_${message.author.id}`, 6700)
        message.channel.send(message.author.tag + ' ✔️ Вы успешно купили данную роль за  `6700 🍬 `')
} else if(args[0] == '7') {
    if (author < 9000) return message.channel.send('❌ У вас не хватает 9000 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
    
    message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "sleepy baby 🍒"))

    db.subtract(`candy_${message.author.id}`, 9000)
    message.channel.send(message.author.tag + '✔️ Вы успешно купили данную роль за  `9000 🍬 `')
} else if(args[0] == '8') {
    if (author < 7800) return message.channel.send('❌ У вас не хватает 7800 🍬  для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
    
    message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "save me in your heart 💗"))

    db.subtract(`candy_${message.author.id}`, 7800)
    message.channel.send(message.author.tag + ' ✔️ Вы успешно купили данную роль за  `7800 🍬 `')

    }
}
module.exports.help = {
    name: "buy"
}
