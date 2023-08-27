const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByNameHandler,
  getPokemonByIdHandler,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/name", getPokemonByNameHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

module.exports = pokemonRouter;
