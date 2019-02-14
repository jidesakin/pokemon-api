const axios = require('axios');

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemAbilities = async name => {
  const abilites = await axios.get({
    method: 'get',
    url: `${BASE_URL}/${name}`,
  });
  return abilites;
};

module.exports = {
  getPokemAbilities,
};
