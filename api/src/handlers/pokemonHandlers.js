const axios = require("axios");
const {
  getAllPokemons,
  postPokemon,
} = require("../controllers/pokemonController");

const getAllPokemonsHandler = async (req, res) => {
  try {
    const allPokemons = await getAllPokemons();

    const name = req.query.name ? req.query.name.toLowerCase() : null;

    if (name !== null) {
      const pokemonFound = allPokemons.find(
        (pokemon) => pokemon.name.toLowerCase() === name
      );

      if (!pokemonFound) {
        res
          .status(404)
          .json({ error: `No se encontró al Pokemon de nombre: ${name}` });
      } else {
        res.status(200).json(pokemonFound);
      }
    } else {
      res.status(200).json(allPokemons);
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
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
