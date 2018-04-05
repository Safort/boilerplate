export default ({ router }) => {
  router.get('/api/test', ctx => {
    /* eslint no-param-reassign: 0 */
    ctx.body = { test: 'test' };
  });
};
