const axios = require('axios');

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getAbilities = async name => {
  let abilites = [];
  try {
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/${name}`,
    });
    abilites = response.data.abilities;
  } catch (error) {
    abilites = [];
  }
  return abilites;
};

module.exports = {
  getAbilities,
};
