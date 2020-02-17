const Discord = require("discord.js");
 
module.exports.run = async(bot, message, args) => {
    //p!report [user] [reason]
let coo = message.guild.channels.find(channel => channel.name === "├🚨жалобы")
let Ruser = message.mentions.members.first( );
let Rreason = args.slice(1).join( " " );
let inline = true;
if(Ruser.hasPermission("ADMINISTRATOR"))
return message.reply("❌ нее... Вы не можете кинуть на него жалобу!");

   else if( !Rreason) {
        return message.channel.send("❌ Вы не правильно оформили жалобу. Попробуйте так: `pf!report [ник] [причина]`")
    }
   else if( !Ruser) {
            return message.channel.send("❌ Вы не правильно оформили жалобу. Попробуйте так: `pf!report [ник] [причина]`")
    };
let reportembed = new Discord.RichEmbed()
    .setFooter(`Жалобу отправил(а): ${ message.author.username}`)
    .setTitle('Жалоба')
    .setColor('#ff0000')
    .addField('Ник нарушителя:', `${Ruser}`, inline)
    .addField('Жалоба в канале:', `${message.channel}`, inline)
    .addField('Причина:', `${Rreason}`)
 
    message.channel.send('Ваша жалоба была успешно отправлена! спасибо за жалобу!');
    message.guild.channels.get('678609170106286101').send(reportembed);
    message.guild.channels.get('676859040965459986').send(`Новая жалоба в ${coo} ! @here`);
}
 
module.exports.help = {
    name: "report"
}