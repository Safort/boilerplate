export default ({ router }): void => {
  router.get('/api/test', (ctx): void => {
    /* eslint no-param-reassign: 0 */
    ctx.body = { test: 'test' };
  });
};
