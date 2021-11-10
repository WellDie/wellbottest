const {
     Telegraf, Markup 
    } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('td', async (ctx)=> {
    Data = new Date();
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    Seconds = Data.getSeconds();

    // Преобразуем месяца
    switch (Month)
    {
    case 0: fMonth="января"; break;
    case 1: fMonth="февраля"; break;
    case 2: fMonth="марта"; break;
    case 3: fMonth="апреля"; break;
    case 4: fMonth="мае"; break;
    case 5: fMonth="июня"; break;
    case 6: fMonth="июля"; break;
    case 7: fMonth="августа"; break;
    case 8: fMonth="сентября"; break;
    case 9: fMonth="октября"; break;
    case 10: fMonth="ноября"; break;
    case 11: fMonth="декабря"; break;
    }
        await ctx.reply("Сегодня " + Day + " " + fMonth + " " + Year + " года");
        await ctx.reply("Текущее время: " + Hour + ":" + Minutes + ":" + Seconds)
})
bot.command('allgym', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Все о нашей гимназии!</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Официальный сайт', 'btn_1'),Markup.button.callback('Эмблема', 'btn_2'), Markup.button.callback('Медиаличности', 'btn_3')],
                [Markup.button.callback('Учителя', 'btn_4'), Markup.button.callback('Проекты', 'btn_5')]
            ]
        )
        )
    } catch(e){
        console.error(e)
    }
        
})
bot.command('dip', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Все о нашей гимназии!</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Ученик', 'btn_6'),Markup.button.callback('Примеры кода(специально для Ветюкова)', 'btn_7')],
                [Markup.button.callback('Развитие навыка', 'btn_8'),Markup.button.callback('Ссылки', 'btn_9')]
            ]
        )
        )
    } catch(e){
        console.error(e)
    }
        
})
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
bot.help((ctx) => ctx.reply(text.commands))
bot.on('message', (ctx) => {
    const text = ctx.message.text;
    if (text.startsWith('count ')) {
      const [_, a, b] = text.split(' ').map(e => Number(e));
      const co = a/b;
      if (co !=co ){
        co = '-'
      }
      console.log(a, b);
      ctx.reply(`Сложение: ${a+b} Вычитание: ${a-b} Деление: ${co} Умножение: ${a*b}`);
    }
    else{
        ctx.reply(`Привет дорогой друг!`)
        ctx.replyWithSticker('CAACAgEAAxkBAAEDHVlhbwNy-ZR8tq-G92I8CCm4pZav4AACCgADuqzRTfskvg66_NEkIQQ')
        ctx.reply(`Тебя приветствует бот WEgor, созданный в рамках проекта`)
        ctx.reply(`Егора Рукавишникова`)
        ctx.reply(`Пропиши /help чтобы узнать все!`)
    }
});

bot.action('btn_2', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.replyWithPhoto('https://gym1505.ru/sites/default/files/styles/news_image_vision/public/default_images/news-default.png?itok=KNeuAEW3')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_1', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Официальный сайт нашей гимназии')
        await ctx.reply('https://gym1505.ru')
        await ctx.replyWithVideo({ source: 'C:/Users/lenovo.PC/Downloads/72gi.mp4' })
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_3', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Федор Якушин - основатель "Гимназия В Лицах И Личностях".')
        await ctx.replyWithPhoto('https://sun1-22.userapi.com/s/v1/ig2/xirfb4LBKIyo918oWhk_U6Jm4JxuWlm8xH5uMqpsfPkOH1nY6UIAdsiOyzzwelcIZbb-RqY2hzzc23CDw12S8Kqh.jpg?size=200x200&quality=95&crop=6,493,1700,1700&ava=1')
        await ctx.reply('Мария Суворова - создатель канала на ютубе. Отметка 100 тыс подписчиков пройдена.')
        await ctx.replyWithPhoto('https://sun9-17.userapi.com/impg/qiYnybTwZrZO_Y1ENmn5jOOMlrW3qnI3NE2MBA/u-77oVPX0XQ.jpg?size=389x492&quality=96&sign=0ceb23c65a7a3ca468086ecd1c247fbd&type=album')
        await ctx.reply('Вадим Терехов - создатель театральной студии в нашей школе')
        await ctx.replyWithPhoto('https://sun1-54.userapi.com/s/v1/ig2/DaVUnfQBDcyUb-7Jz5FUGdK-IF6Ql5uNSMcudGhIN1SeWBQIFTCrVLzDoL3oMAeR0TCLDKQarY8Z6U6f5pWCju6k.jpg?size=200x232&quality=96&crop=0,407,1497,1739&ava=1')
        await ctx.reply('Коняхин Александр Валерьевич - информатик и лучший игрок в DOTA 2')
        await ctx.replyWithPhoto('https://sun1-29.userapi.com/s/v1/ig2/9ukiHjMmWvFWQcN16S4T3GX9shWxfBFAW5F5jkcdObRqxw-AKPbaG3U30aD8vDHKBh5U1CSr_3zGojOw-xrgG9ux.jpg?size=200x272&quality=96&crop=71,82,1523,2078&ava=1')
        await ctx.reply('Рукавишников Егор - создатель данного бота, канала WELLDIE, битмейкер. Отметка в 250 подписчиков пройдена')
        await ctx.replyWithPhoto('https://sun9-21.userapi.com/impg/PkOgZd294M76oEwnw50dwMZps7bTNGtELYq_7w/DfNMSvo018Q.jpg?size=810x1080&quality=96&sign=2c561e7409f7adf3df5ecdd96b3300d0&type=album')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_4', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Наши прекрасные учителя')
        await ctx.reply('https://gym1505.ru/teachers')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_5', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Каждый год наши люди делают проекты')
        await ctx.reply('Которые скорее всего пригодятся в будующем, а так же развивают нас!')
        await ctx.reply('http://project.gym1505.ru/')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_6', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Рукавишников Егор Васильевич')
        await ctx.replyWithPhoto('https://sun9-21.userapi.com/impg/PkOgZd294M76oEwnw50dwMZps7bTNGtELYq_7w/DfNMSvo018Q.jpg?size=810x1080&quality=96&sign=2c561e7409f7adf3df5ecdd96b3300d0&type=album')
        await ctx.reply('Имеет опыт в создании программ на Python, PascalABC, html&css.')
        await ctx.reply('Создал свой собственный сервер в популярной игре. Почему я это написал?')
        await ctx.reply('Потому что для нормального сервера нужны плагины, которые помогают ему в работе. Я создавал свои плагины, которые заливал на свой сервер.')
        await ctx.reply('Хоть он раньше и изучал JavaScript, он забыл этот язык, который вскоре пришлось наверстывать.')
        await ctx.reply('Чтобы вы хоть на минутку представили, то бот, который сейчас отправляет это сообщение, состоит из 220 строк.')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_7', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.replyWithPhoto('https://media.discordapp.net/attachments/898998091829608459/907703457824276590/unknown.png?width=1089&height=612')
        await ctx.replyWithPhoto('https://media.discordapp.net/attachments/898998091829608459/907703519027544165/unknown.png?width=1089&height=612')
        await ctx.replyWithPhoto('https://media.discordapp.net/attachments/898998091829608459/907703584840368189/unknown.png?width=1089&height=612')
    } catch(e){
        console.error(e)
    }
})
bot.action('btn_8', async (ctx) =>{
    try{
        await ctx.answerCbQuery()
        await ctx.reply('Честно, я раньше изучал JavaScript для создании интерактива на сайтах, но вскоре я о нем забыл. Поэтому я изучил новый язык.')
        await ctx.reply('Также пришлось развивать навык общения с консультантами, так какраньше оно из себя прдставляло вытягивание информации. Вроде сейчас стао лучше благодаря возможности консультантов-студентов.')
        await ctx.reply('Подойду к распределению кода. Раньше был полный бардак: нужные друг другу коды отделяла пропасть. Теперь он выглядит "как по полочкам".')
        await ctx.reply('Про дедлайн я вообще молчу, он намного улучшился именно потому что я хотел этим заниматься.')
        await ctx.reply('Лучше стало понимание того, что ты пишешь. Не просто набор команд, взубренных в мозг, а целая система.')
    } catch(e){
        console.error(e)
    }
})
bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))