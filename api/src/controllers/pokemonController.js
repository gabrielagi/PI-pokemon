const axios = require("axios");
const { Pokemon, Type } = require("../db");
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Obtener todos los pokemones de la Api (hasta 40)
const getPokemonsApi = async () => {
  try {
    console.log("Obteniendo Pokémon de la API...");
    const response = await axios.get(`${API_BASE_URL}?limit=70`);
    const pokemonsApi = response.data.results;

    if (pokemonsApi.length === 0) {
      throw new Error("No se encontraron Pokemones");
    }

    const allPokemons = await Promise.all(
      pokemonsApi.map(async (pokemon) => {
        try {
          const res = await axios.get(pokemon.url);
          console.log(`Obteniendo información de ${res.data.name}...`);
          return res.data;
        } catch (error) {
          console.log(
            `Error obteniendo información de ${pokemon.url}:`,
            error.message
          );
          return null;
        }
      })
    );

    const filteredNullPokemons = allPokemons.filter(
      (pokemon) => pokemon !== null
    );

    console.log("Pokémon de la API obtenidos exitosamente.");
    return filteredNullPokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.home.front_default,
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((type) => {
        return { name: type.type.name };
      }),
    }));
  } catch (error) {
    console.log("Error en getPokemonsApi:", error.message);
    return [];
  }
};

// Obtener todos los pokemones de la tabla Pokemon incluida la relacion con type
const getPokemonsDb = async () => {
  try {
    const pokemonsDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    console.log("Pokémon de la DB obtenidos exitosamente.");
    console.log("Pokemons db", pokemonsDb);
    return pokemonsDb;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

// Obtener todos los pokemones de la Api + pokemones de la Db
const getAllPokemons = async () => {
  try {
    const pokemonsApi = await getPokemonsApi();
    const pokemonsDb = await getPokemonsDb();

    const allPokemons = [...pokemonsApi, ...pokemonsDb];

    console.log("Encontro todos los Pokémon (completa).");
    return allPokemons;
  } catch (error) {
    console.log("Error en getAllPokemons:", error.message);
    return [];
  }
};

const postPokemon = async ({
  name,
  img,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  type = [],
}) => {
  try {
    if (!name || !img || !hp || !attack || !defense) {
      throw new Error("Faltan completar campos obligatorios");
    }

    // Crear el Pokémon
    const pokemonCreated = await Pokemon.create({
      name,
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    // Obtener los registros de tipos según los nombres en el arreglo "type"
    const typeNames = type.map((t) => t.name);
    const pokemonTypes = await Type.findAll({
      where: { name: typeNames },
    });

    // Asociar cada tipo encontrado al Pokémon
    await pokemonCreated.addType(pokemonTypes);
    // Retorno true para la lógica de la action POST_POKEMON
    return true;
  } catch (error) {
    console.log("Error en postPokemon:", error.message);
    return false;
  }
};

const filterPokemonByType = () => {};

module.exports = {
  getAllPokemons,
  getPokemonsDb,
  getPokemonsApi,
  postPokemon,
};
