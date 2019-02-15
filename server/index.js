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
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = { message: error.message };
    ctx.app.emit('error', error, ctx);
  }
});


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

const server = app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`),
);

module.exports = server;
