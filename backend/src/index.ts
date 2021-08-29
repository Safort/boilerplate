import * as path from 'path';
import Fastify from 'fastify';

const root = path.join(__dirname, '../..', '/app/public');
const fastify = Fastify({
  logger: true,
});

fastify.register(require('fastify-static'), { root });

fastify.listen(3001, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
  console.info(`server listening on ${address}`);
});
