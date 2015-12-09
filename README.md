Broken websocket demo for https://github.com/webpack/webpack-dev-server/issues/283

Reproduce against current stable:

1. `npm install`
2. `./node_modules/.bin/webpack-dev-server`
3. `node server.js`
4. Visit `localhost:8080`. Notice nothing is logged to console, as the Websocket connection never successfully connects to the proxied server.

To see working behavior, using my `proxy-websockets` branch:

1. In another folder, `git clone https://github.com/thomasboyt/webpack-dev-server.git` (unfortunately just `npm install`ing that branch doesn't work because of assets that don't get compiled)
2. `git checkout proxy-websockets`
3. `npm install`
4. `npm link`
5. In the websocket demo folder, `npm link webpack-dev-server`
6. `./node_modules/.bin/webpack-dev-server`
7. `node server.js`
8. Visit `localhost:8080`. Notice in the dev console that the Websocket connection successfully connects :)
