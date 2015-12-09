var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });

console.log('started websocket server');

wss.on('connection', function connection(ws) {
  console.log('got connection');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
