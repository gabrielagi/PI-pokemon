const axios = require("axios");
const {
  getAllPokemons,
  getPokemonsDb,
  getPokemonsApi,
  postPokemon,
  deletePokemon,
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

    let pokemonFound;
    const allPokemons = await getAllPokemons();

    // Verificar si el id es un número
    if (/^\d+$/.test(id)) {
      pokemonFound = allPokemons.find((pokemon) => pokemon.id === +id);
    }
    // Verificar si el id es un UUID
    else {
      // const allPokemons = await getPokemonsDb();
      pokemonFound = allPokemons.find((pokemon) => pokemon.id === id);
    }

    if (!pokemonFound) {
      throw new Error(`No se encontró al Pokemon con id: ${id}`);
    }

    res.status(200).json(pokemonFound);
  } catch (error) {
    console.log("Error en getPokemonByIdHandler:", error.message);
    res.status(500).json({ error: "Error en el servidor." });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const pokemon = req.body;
    const typesFormat = req.body.types.map((type) => ({
      name: type.name,
    }));
    pokemon.types = typesFormat;

    console.log("Un type enviado", typesFormat);
    const response = await postPokemon(pokemon);
    console.log("response", response);
    if (response !== false) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "No se pudo crear el Pokémon" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletePokemonHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await deletePokemon(id);

    if (success) {
      res.status(200).json({ message: "Pokémon eliminado exitosamente" });
    } else {
      res
        .status(404)
        .json({ error: `No se encontró un Pokémon con el ID ${id}` });
    }
  } catch (error) {
    console.error("Error en deletePokemonHandler:", error.message);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

let myFavorites = []; // Declaración de la lista de favoritos

// Handler para agregar un Pokémon a la lista de favoritos
const addToFavorites = async (req, res) => {
  try {
    const { id } = req.body; // Suponemos que el cuerpo de la solicitud contiene el ID del Pokémon que se va a agregar

    let pokemonFound;
    const allPokemons = await getAllPokemons();

    // Verificar si el id es un número
    if (/^\d+$/.test(id)) {
      pokemonFound = allPokemons.find((pokemon) => pokemon.id === +id);
    }
    // Verificar si el id es un UUID
    else {
      // const allPokemons = await getPokemonsDb();
      pokemonFound = allPokemons.find((pokemon) => pokemon.id === id);
    }
    console.log("Mi pokemon favorito", pokemonFound);
    if (!pokemonFound) {
      throw new Error(`No se encontró al Pokemon con id: ${id}`);
    }

    // Agrega el Pokémon a la lista de favoritos
    myFavorites.push(pokemonFound);
    console.log("Mis pokemones favoritos", myFavorites);
    return res.status(200).json(myFavorites);
  } catch (error) {
    console.error("Error en addToFavorites:", error.message);
    return res.status(500).json({
      error: "Ha ocurrido un error al agregar el Pokémon a favoritos",
    });
  }
};

// Handler para eliminar un Pokémon de la lista de favoritos
const removeFromFavorites = (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si el id es un número
    if (/^\d+$/.test(id)) {
      myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
    }
    // Verificar si el id es un UUID
    else {
      // const allPokemons = await getPokemonsDb();
      myFavorites = myFavorites.filter((favorite) => favorite.id !== id);
    }

    return res.status(200).json(myFavorites);
  } catch (error) {
    console.error("Error en removeFromFavorites:", error.message);
    return res.status(500).json({
      error: "Ha ocurrido un error al eliminar el Pokémon de favoritos",
    });
  }
};

module.exports = {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  postPokemonHandler,
  deletePokemonHandler,
  addToFavorites,
  removeFromFavorites,
};
