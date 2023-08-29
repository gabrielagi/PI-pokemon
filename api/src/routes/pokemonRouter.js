const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
