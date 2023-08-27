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

const getPokemonByNameHandler = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    console.log(`El nombre del parametro name es: ${name}`);
    const allPokemons = await getAllPokemons();

    const pokemonFound = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name)
    );
    console.log(`El nombre del pokemonFound es: ${pokemonFound}`);
    if (pokemonFound.length === 0) {
      throw new Error(`No se encontró al Pokemon de nombre: ${name}`);
    }

    res.status(200).json(pokemonFound);
  } catch (error) {
    console.log("Error en getPokemonByNameHandler:", error.message);
    res.status(500).json({ error: "Error en el servidor." });
  }
};

const getPokemonByIdHandler = async (req, res) => {};

const postPokemonHandler = async (req, res) => {};

module.exports = {
  getAllPokemonsHandler,
  getPokemonByNameHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
};
