var Discordie = require('discordie');
var game = {name: "with Guns"};
const Events = Discordie.Events;
const client = new Discordie();

client.User.setStatus("online", game);

client.connect({
  token: 'MzE5MjY0NTk3ODUwNzE4MjEw.DA-f-Q.A2errzqZGH86wfOo6_QSeizbQRo'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e =>{
  if(e.message.content == 'brb'){
    e.message.channel.sendMessage('I\'ll be back.');
  }
});

client.Dispatcher.on("MESSAGE_CREATE", e =>{
  if(e.message.content == 'night' || e.message.content == 'bye'){
    e.message.channel.sendMessage('Hasta la vista, baby.');
  }
});
