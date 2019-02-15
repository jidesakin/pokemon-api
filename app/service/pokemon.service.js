const axios = require('axios');

const { pokemonApiUrl } = require('../../config/config');
const ApiError = require('../exception/ApiError');

const getAbilitiesByName = async name => {
  console.log(pokemonApiUrl)
  let abilites = [];
  try {
    const response = await axios({
      method: 'get',
      url: `${pokemonApiUrl}/${name}`,
    });
    abilites = response.data.abilities;
  } catch (error) {
    throw new ApiError('Pokemon API not reachable');
  }
  return abilites;
};

module.exports = {
  getAbilitiesByName,
};
