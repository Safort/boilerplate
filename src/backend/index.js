import Koa from 'koa';
import middleware from './middleware';
import * as config from './config';

const serverHost = config.server.host;
const serverPort = config.server.port;
const app = new Koa();

middleware({ app });

app.listen(serverPort, serverHost, () => {
  console.log(`\n Started on http://${serverHost}:${serverPort} \n`);
});
