# pokemon-api
This API returns the abilities of a Pokemon given a Pokemon’s name. It is built using Koa - a minimalistic Node Js framework.
The API uses an third-party API -  [Poke API](http://pokeapi.co)

## Folder Structure
- `app`: contains application code which includes the controller (`pokemon`), `service`, `router`, `middleware`, custom `exception`.
- `config`: contains the file that holds the environment variables.
- `server`: contains tcode that starts the application
- `test`: contains the integration and unit tests
- `.env.sample`: contains the environment variables


## Dependencies
- **Node**: v10.9.0
- **Redis**: use for caching the API responses. Make sure you have redis server installed and started. To install redis [click here](https://redis.io/topics/quickstart). To start your redis server, run the following command: `redis-server`.
- **Yarn**: used for dependency management


## How to run the API

- Clone this repo by running this command: `git clone https://github.com/jidesakin/pokemon-api.git`
- Run `cd pokemon-api && yarn install` to install dependencies
- Make a copy of the `.env.sample` and rename it to `.env`
- Run `yarn start` to start the application


## How to test
- Run `yarn test` to run the tests
