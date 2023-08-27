const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByNameHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/name", getPokemonByNameHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
