export default ({ router }) => {
  router.get('/api/test', function(ctx, next) {
    ctx.body = { test: 'test' };
  });
};
