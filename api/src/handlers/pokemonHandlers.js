const axios = require("axios");
const {
  getAllPokemons,
  getPokemonsDb,
  getPokemonsApi,
  postPokemon,
} = require("../controllers/pokemonController");

// Función para obtener pokemones filtrados por nombre y origen ("db" o "api")
const getPokemonsFiltered = async (name, origin) => {
  let allPokemons = [];

  if (origin === "db") {
    allPokemons = await getPokemonsDb();
  } else if (origin === "api") {
    allPokemons = await getPokemonsApi();
  } else {
    allPokemons = [...(await getPokemonsDb()), ...(await getPokemonsApi())];
  }

  if (name) {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name)
    );
  }

  return allPokemons;
};

const getAllPokemonsHandler = async (req, res) => {
  try {
    const name = req.query.name ? req.query.name.toLowerCase() : null;
    const origin = req.query.origin ? req.query.origin.toLowerCase() : null; // Puedes usar "db" o "api"

    const filteredPokemons = await getPokemonsFiltered(name, origin);

    res.status(200).json(filteredPokemons);
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
