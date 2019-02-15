const Router = require('koa-router');
const { getAbilities } = require('../pokemon/pokemon.controller');

const router = new Router();

router.get('/pokemon/:name', getAbilities);

module.exports = router;
