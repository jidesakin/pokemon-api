const axios = require('axios');

const { pokemonApiUrl } = require('../../../config/config');
const ApiError = require('../../exception/api.error');
const NotFoundError = require('../../exception/not-found.error');

const throwError = (error) => {
    if (error.response) {
        throw new NotFoundError('Pokemon Not Found');
    }
    throw new ApiError('Pokemon API not reachable');
}

const getAbilitiesByName = async name => {
    let abilites = [];
    try {
        const response = await axios({
            method: 'get',
            url: `${pokemonApiUrl}/${name}`,
        });
        if (response.data) {
            abilites = response.data.abilities;
        }

    } catch (error) {
        throwError(error)
    }
    return abilites;
};

module.exports = {
    getAbilitiesByName,
};
