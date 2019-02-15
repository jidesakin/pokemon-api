const PokemonService = require('../service/pokemon.service');

const getAbilities = async ctx => {
  const name = ctx.params.name.toLowerCase();
  const abilities = await PokemonService.getAbilities(name);
  ctx.body = { name, abilities };
};

module.exports = {
  getAbilities,
};
