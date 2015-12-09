var url = 'ws://localhost:8080/websocket';

var ws = new WebSocket(url);

ws.onopen = function() {
  console.log('opened ws connection');
};

ws.onclose = function() {
  console.log('closed ws connection');
};

ws.onmessage = function(msg) {
  console.log('received message ' + msg);
};
