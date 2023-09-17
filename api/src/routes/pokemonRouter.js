const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
  deletePokemonHandler,
  addToFavorites,
  removeFromFavorites,
} = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

pokemonRouter.post("/", postPokemonHandler);

pokemonRouter.delete("/:id", deletePokemonHandler);

pokemonRouter.post("/favorites", addToFavorites);

pokemonRouter.delete("/favorites/:id", removeFromFavorites);

module.exports = pokemonRouter;
