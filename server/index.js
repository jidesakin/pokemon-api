const Koa = require('koa');
const logger = require('koa-logger');
const cache = require('koa-redis-cache');

const router = require('../app/routes');
const onError = require('../app/middleware/on-error.middleware');
const responseTime = require('../app/middleware/response-time.middleware');

const app = new Koa();
const PORT = 5000;

const options = {
    expire: 60,
};

app.use(onError);

app.use(cache(options));

app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(responseTime);

const server = app.listen(PORT, () =>
    console.log(`App running on port ${PORT}`),
);

module.exports = server;
