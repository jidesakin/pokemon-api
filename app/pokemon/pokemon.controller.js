const PokeApiService = require('../service/pokeapi');

const getAbilitiesByName = async ctx => {
    const name = ctx.params.name.toLowerCase();
    const abilities = await PokeApiService.getAbilitiesByName(name);
    ctx.body = { name, abilities };
};

module.exports = {
    getAbilitiesByName,
};
