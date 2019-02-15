require('dotenv').config()

const axios = require('axios');
const pokeApiService = require('../app/service/pokeapi');

jest.mock('axios');

test.skip('should get pokemon abilities by name', async () => {
    const abilities = [{
        "ability": {
            "name": "imposter",
            "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
    },
    {
        "ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
    }];
    axios.get.mockImplementation(() => Promise.resolve({ data: abilities }));
    const response = await pokeApiService.getAbilitiesByName('ditto');
    console.log(response)

});