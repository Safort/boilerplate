import * as koaRouter from 'koa-router';
import test from './test';

const router = new koaRouter();

test({ router });

export default router;
