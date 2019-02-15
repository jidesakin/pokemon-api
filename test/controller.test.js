jest.mock('../app/service/pokeapi')

require('dotenv').config()
const pokemonController = require('../app/pokemon/pokemon.controller');

describe('Controller Test', () => {

    test('Given a pokemon name should return the abilities', async () => {
        const ctx = { params: { name: 'ditto' } };
        await pokemonController.getAbilitiesByName(ctx);
        expect(ctx.body).toBeDefined();
    });

});
