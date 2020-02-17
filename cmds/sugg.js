const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if(message.author.bot) return
        if(!args[0]) return bot.send("Пример оформления. `pf!предложение [предложение]`");
        let botmessage = args.join(" ");
        let spy = new Discord.RichEmbed()
        .addField("📝Предложение от", `<@${message.author.id}>`)
        .addField("📢Канал", message.channel)
        .addField("📄Предложение", botmessage)
      bot.channels.get('678610112964984832').send(spy)
    };


}

module.exports.help = {
  name: "предложение",
  aliases: []
}