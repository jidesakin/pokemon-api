const onError = async (ctx, next) => {
    try {
        await next();
        const rt = ctx.response.get('X-Response-Time');
        console.log(`${ctx.method} ${ctx.url} - ${rt}`);
    } catch (error) {
        ctx.status = error.status || 500;
        ctx.body = { message: error.message };
        ctx.app.emit('error', error, ctx);
    }
}

module.exports = onError;