const axios = require("axios");
const {
  getAllPokemons,
  postPokemon,
} = require("../controllers/pokemonController");

const { getTypesHandler } = require("../handlers/typeHandlers");

const getAllPokemonsHandler = async (req, res) => {
  try {
    // Primero llamo al conrtoller getTypes para cargar los tipos en la Db
    const types = await getTypesHandler();
    console.log("Tengo types en getAllPokemons", types);
    const allPokemons = await getAllPokemons();
    // Evaluar si llega un name por query y retornarlo, sino devuelvo todos los pokemons
    const name = req.query.name ? req.query.name.toLowerCase() : null; // Cambio aquí

    if (name !== null) {
      console.log(`El nombre del parametro name es: ${name}`);

      const pokemonFound = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name)
      );

      if (pokemonFound.length === 0) {
        throw new Error(`No se encontró al Pokemon de nombre: ${name}`);
      }
      res.status(200).json(pokemonFound);
    } else {
      res.status(200).json(allPokemons);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const allPokemons = await getAllPokemons();

    const pokemonFound = allPokemons.find((pokemon) => pokemon.id === +id);

    if (!pokemonFound.name) {
      throw new Error(`No se encontró al Pokemon de id: ${id}`);
    }

    res.status(200).json(pokemonFound);
  } catch (error) {
    console.log("Error en getr.message");
    res.status(500).json({ error: "Error en el servidor." });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const pokemon = req.body;
    console.log("Un type enviado", pokemon.type);
    const response = await postPokemon(pokemon);
    console.log("response", response);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
};
