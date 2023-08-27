const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByNameHandler,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/name", getPokemonByNameHandler);

module.exports = pokemonRouter;
