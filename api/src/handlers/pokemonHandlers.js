const axios = require("axios");
const { getAllPokemons } = require("../controllers/pokemonController");

const getAllPokemonsHandler = async (req, res) => {
  try {
    const pokemons = await getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getPokemonByNameHandler = async (req, res) => {};

const getPokemonByIdHandler = async (req, res) => {};

const postPokemonHandler = async (req, res) => {};

module.exports = {
  getAllPokemonsHandler,
  getPokemonByNameHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
};
