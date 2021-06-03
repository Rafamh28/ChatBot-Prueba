//inicializa la dependencia Telegraf.

const { Telegraf } = require('telegraf');

//Crea la instancia de la dependencia!

const bot = new Telegraf(/* Aqui va el token del bot */);
var tokenizer = new natural.WordTokenizer();

//Trabaja con los comandos que te da telegram

bot.start((ctx) => {
    var username = ctx.message.from.username;
    ctx.reply("Bienvenido al bot @" + username + ". Que te gustaria saber? ");
});

bot.help((ctx) => {
    ctx.reply("Como quieres que te ayude?")
});

//Crea un comando!
bot.command("mycommand", (ctx) => {
    ctx.reply("No entiendo por que esta vaina ahora me esta dando ese error! ");
});

//El bot se pone atento a la palabra en especifico que diga el usuario!
bot.hears(["Pandemia", "pandemia", "PANDEMIA"], ctx => {
    ctx.reply("Escuche que mencionaste algo del coronavirus, Quisieras hacer una pregunta en especifico? ");
});

//Bot.on() reconoce cuando el usuario esta escribiendo!
bot.on("sticker", ctx => {
    ctx.reply("Oh, asi que te gustan los stickers! ");
})

//Inicializa el bot!
bot.launch();