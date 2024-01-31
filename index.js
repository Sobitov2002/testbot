const TelegramBot = require('node-telegram-bot-api');
const token = '6887867245:AAE_m2MPPthtDHTwkgGuq5fMYIduAWoprtg';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Assalomu aelykum botimizga xush kelibsiz !!');
  });
