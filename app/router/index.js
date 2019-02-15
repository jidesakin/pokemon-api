const Router = require('koa-router');
const { getAbilitiesByName } = require('../pokemon/pokemon.controller');

const router = new Router();

router.get('/pokemon/:name', getAbilitiesByName);

module.exports = router;
