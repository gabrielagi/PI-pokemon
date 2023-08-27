const { Router } = require("express");
const { getAllPokemonsHandler } = require("../handlers/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);

module.exports = pokemonRouter;
