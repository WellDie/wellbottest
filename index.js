const {
     Telegraf, Markup 
    } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
bot.help((ctx) => ctx.reply(text.commands))
bot.on('message', (ctx) => {
    const text = ctx.message.text;
    if (text.startsWith('count ')) {
      const [_, a, b] = text.split(' ').map(e => Number(e));
      console.log(a, b);
      ctx.reply(`Сложение: ${a+b} Вычитание: ${a-b} Деление: ${a/b} Умножение: ${a*b}`);
    }
    else{
        ctx.reply(`Привет дорогой друг!`)
        ctx.replyWithSticker('CAACAgEAAxkBAAEDHVlhbwNy-ZR8tq-G92I8CCm4pZav4AACCgADuqzRTfskvg66_NEkIQQ')
        ctx.reply(`Тебя приветствует бот WEgor, созданный в рамках проекта`)
        ctx.reply(`Егора Рукавишникова`)
        ctx.reply(`Пропиши /help чтобы узнать все!`)
    }
});

bot.command('course', async (ctx)=> {
    try {
        ctx.reply('Команда курс работает!')
    } catch(e){console.error(e)}
})

function addActionBot(name, src, text){
    bot.action(name, async(ctx) => {
        try{
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        }catch(e){
            console.error(e)
        }
    })
}

addActionBot('btn_1', './img/1.jpg', text.text1)
addActionBot('btn_2', './img/2.jpg', text.text2)
addActionBot('btn_3', false, text.text3)

bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))