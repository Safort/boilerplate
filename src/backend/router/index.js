import koaRouter from 'koa-router';
import test from './test';

const router = koaRouter();

test({ router });


export default router;
