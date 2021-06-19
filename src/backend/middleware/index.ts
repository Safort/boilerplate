import * as staticServ from 'koa-static';
import router from '../router';

export default ({ app }): void => {
  app.use(staticServ('./app/public')).use(router.routes()).use(router.allowedMethods());
};
