const MockPokeApi = jest.fn().mockImplementation(() => ({
    async getAbilitiesByName(name) {
        if (name === 'invalid') {
            throw new ApiError('Pokemon API not reachable');
        }
        return {
            name: "ditto",
            abilities: [
                {
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
                }
            ]
        }
    }
}));

module.exports = MockPokeApi;