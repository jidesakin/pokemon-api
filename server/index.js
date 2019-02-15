require('dotenv').config()
const Koa = require('koa');
const logger = require('koa-logger');
const cache = require('koa-redis-cache');
const cors = require('@koa/cors')

const router = require('../app/router');
const onError = require('../app/middleware/on-error.middleware');
const responseTime = require('../app/middleware/response-time.middleware');

const app = new Koa();

const options = {
    expire: 60,
};

app.use(onError);

app.use(cache(options));
app.use(cors())
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(responseTime);

const server = app.listen(process.env.APP_PORT, () =>
    console.log(`App running on port ${process.env.APP_PORT}`),
);

module.exports = server;
