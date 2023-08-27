const { Router } = require("express");
const pokemonRouter = require("./pokemonRouter");

const router = Router();

router.use("/pokemons", pokemonRouter);

module.exports = router;
