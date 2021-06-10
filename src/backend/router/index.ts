import * as KoaRouter from 'koa-router';
import test from './test';

const router = new KoaRouter();

test({ router });

export default router;
