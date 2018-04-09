const ChatApp = require('./modules/chat');

let webinarChat = new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat = new ChatApp('---------vk');

vkChat.setMaxListeners(2);

const chatOnMessage = (message) => {
  console.log(message);
};

const printingMessage = () => {
  console.log('Готовлюсь к ответу.')
};

const vkCloseMessage = () => {
  console.log('Чат вконтакте закрылся :(');
};

webinarChat.on('message', printingMessage);
webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', printingMessage);
vkChat.on('message', chatOnMessage);
vkChat.on('close', vkCloseMessage);

// Закрыть вконтакте
setTimeout(() => {
  console.log('Закрываю вконтакте...');
  vkChat.close();
  vkChat.removeListener('message', chatOnMessage);
}, 10000);


// Закрыть фейсбук
setTimeout(() => {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000);

// Закрыть вебинар
setTimeout(() => {
  console.log('Закрываю вебинар');
  webinarChat.removeListener('message', chatOnMessage);
}, 30000);