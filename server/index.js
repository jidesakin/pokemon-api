const Koa = require('koa');
const logger = require('koa-logger');
const router = require('../app/routes');

const app = new Koa();
const PORT = 5000;

app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message;
    ctx.app.emit('error', error, ctx);
  }
});

const server = app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`),
);

module.exports = server;
