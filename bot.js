const Discord = require('discord.js');
const db =  require('quick.db')
const bot = new Discord.Client();
let lavalink = require('discord.js-lavalink')
let xp = require('./xp.json');
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on('voiceStateUpdate', async(oldMember, newMember) => {
    let oldChannel = oldMember.voiceChannelID;
    let newChannel = newMember.voiceChannelID;
    let categ      = newMember.guild.channels.get('678340371003998208'); //Айди вашей категории в приватных каналах
    let chann      = newMember.guild.channels.get('678340503506386944'); //Айди канала в который должен будет зайти человек
    if(!categ && !chann) throw new TypeError('Не верно указан один из айди и/или такого канала не существует')
    let channels   = newMember.guild.channels.filter(i => i.parentID == categ.id);
    if(newChannel == chann.id && channels.size < 6) {
        let tempchann = await newMember.guild.createChannel(` ⟦🍬⟧ комната ${newMember.displayName}`, {
            parent: categ.id,
            type: 'voice'
        })
        newMember.setVoiceChannel(tempchann.id);
        newMember.privateVoice = tempchann;
    }
    if(newMember.privateVoice !== undefined && oldChannel == newMember.privateVoice.id && newChannel != chann.id){
        newMember.privateVoice.delete()
        newMember.privateVoice = undefined;
    }
});
bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.user.setPresence({ game: { name: '𝐏𝐢𝐧𝐤 𝐅𝐥𝐚𝐦𝐞' } });
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    let myGuild = bot.guilds.get('586825171168526336'); 
    let memberCount = myGuild.memberCount; 
    let memberCountChannel = myGuild.channels.get('678611777684242452'); 
    memberCountChannel.setName('🍬 На сервере: ' + memberCount) 
    .then(result => console.log(result)) 
    .catch(error => console.log(error));
    });

    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)
});
bot.on('guildMemberRemove', async member => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Участник вышел', member.user.avatarURL)
        .setDescription(`<@${member.user.id}>`)
        .setColor(0xf04747)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
    let channel = member.guild.channels.find(c => c.name == '⟦💻⟧bot-actions')
    await channel.send(embed) 
    let myGuild = bot.guilds.get('586825171168526336'); 
    let memberCount = myGuild.memberCount; 
    let memberCountChannel = myGuild.channels.get('678611777684242452'); 
    memberCountChannel.setName('🍬 На сервере: ' + memberCount) 
    .then(result => console.log(result)) 
    .catch(error => console.log(error));
})
    bot.on('guildMemberAdd', async member => {
        var role = member.guild.roles.find ("name", "◦ ☄️ › Pink Flame");
        member.addRole(role);
        let channel = member.guild.channels.find(c => c.name == '⟦💻⟧bot-actions')  
        let argsUser 
        if (member) argsUser = member.user
        else argsUser = message.author
        let role1 = member.guild.channels.find(channel => channel.name === "┌📖руководство")
        let role2 = member.guild.channels.find(channel => channel.name === "├📚правила")
    let embed = new Discord.RichEmbed()
        .addField("Правила сервера:", `${role1}`, true) //Создаем поле с дин. размером
        .addField("Информация о сервере:", `${role2}`, true) //Создаем поле с дин. размером
        .setDescription(`Хей, привет, <@${member.user.id}> !
        Мы рады видеть тебя в **Pink Flame.** 
        Рекомендуем ознакомиться с разделами ниже!`)
        .setColor("#5ae263")
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setThumbnail("https://images-ext-1.discordapp.net/external/Z5D98MT7PfNlnKMp-PXlJoXZs5OfThLYCCIVkVfwtVs/https/media.discordapp.net/attachments/642066587129741344/662853963779145748/Pak.gif?width=473&height=473")
        .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    await channel.send(embed)
        let myGuild = bot.guilds.get('586825171168526336'); 
        let memberCount = myGuild.memberCount; 
        let memberCountChannel = myGuild.channels.get('678611777684242452'); 
        memberCountChannel.setName('🍬 На сервере: ' + memberCount) 
        .then(result => console.log(result)) 
        .catch(error => console.log(error));
    });
    
bot.on('message', async message => {
    if(message.content.startsWith("*setvoice")) {
        if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **У вас нет  прав!**');
        message.channel.send('✅| **Создана комната by haventsound**');
        message.guild.createChannel(`🔉 Голосовой онлайн : ${message.guild.members.filter(m => m.voiceChannel).size}` , 'voice').then(c => {
          console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
          c.overwritePermissions(message.guild.id, {
            CONNECT: false,
            SPEAK: false
          });
          setInterval(() => {
            c.setName(`🔉 Голосовой онлайн : ${message.guild.members.filter(m => m.voiceChannel).size}`)
          },10);
        });
        }
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    if (message.content === "coinflip") {
        var flip = ["Орёл!", 
                    "Решка!"]
                var temp = flip[Math.floor(Math.random() * 2)] 
message.channel.send(temp)
    }
    if (message.content === "Доброе утро"){
        message.channel.send('**Доброе утро**')
    }

    if (message.content.includes("https://")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }
      if (message.content.includes("discord.gg")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }
      if (message.content.includes("www.")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }
    if(message.content === "png") {
            const embed = new Discord.RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
                .setColor("#d18dda") 
                    message.delete().catch();
            message.channel.send({embed});
}
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            warns:0,
            gamewarns:0,
        };
    };

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);

    });
    let xpAdd = Math.floor(Math.random() * 1) + 1;
    console.log(xpAdd);

    if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1
        };
      }
      let curxp = xp[message.author.id].xp;
      let curlvl = xp[message.author.id].level;
      let nxtLvl = xp[message.author.id].level * 100;
      xp[message.author.id].xp =  curxp + xpAdd;
      if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle("Достигнут новый уровень!")
        .setColor(0x41b581)
        .setImage("https://cdn-images-1.medium.com/max/1600/0*npGNTBfBWAarfC9O.gif")
        .setDescription(`<@${message.author.id}> Ваш новый уровень - ${curlvl + 1} Никогда не останавливайся в начатом, зарабатывая уровень — ты зарабатываешь привилегии!
        Проверить свой уровень можно с помощью команды pf!level`)
        message.guild.channels.get('678340058331480090').send(lvlup);
      }
      fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
      });
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id; 
      });
bot.login(token);