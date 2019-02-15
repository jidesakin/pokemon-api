const PokemonService = require('../service/pokemon.service');

const getAbilitiesByName = async ctx => {
  const name = ctx.params.name.toLowerCase();
  const abilities = await PokemonService.getAbilitiesByName(name);
  ctx.body = { name, abilities };
};

module.exports = {
  getAbilitiesByName,
};
