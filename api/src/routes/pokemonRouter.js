const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
  deletePokemonHandler,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

pokemonRouter.post("/", postPokemonHandler);

pokemonRouter.delete("/:id", deletePokemonHandler);

module.exports = pokemonRouter;
