const axios = require("axios");
const { Pokemon, Type } = require("../db");
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Obtener todos los pokemones de la Api (hasta 40)
const getPokemonsApi = async () => {
  try {
    console.log("Obteniendo Pokémon de la API...");
    const response = await axios.get(`${API_BASE_URL}?limit=40`);
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
    return filteredNullPokemons.map((p) => ({
      id: p.id,
      name: p.name,
      imagen: p.sprites.other.dream_world.front_default,
      hp: p.stats[0].base_stat,
      attack: p.stats[1].base_stat,
      defense: p.stats[2].base_stat,
      speed: p.stats[5].base_stat,
      height: p.height,
      weight: p.weight,
      types: p.types.map((type) => {
        return { name: type.type.name };
      }),
    }));
  } catch (error) {
    console.log("Error en getPokemonsApi:", error.message);
    return [];
  }
};

// Obtener todos los pokemones de la tabla Pokemon incluida la relacion con type
// const getPokemonsDb = async (req, res) => {
//   try {
//     const pokemonsDb = await Pokemon.findAll({
//       include: {
//         model: Type,
//         attributes: ["name"],
//         through: {
//           attributes: [],
//         },
//       },
//     });
//     return pokemonsDb;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const getAllPokemons = async () => {
  try {
    const pokemonsApi = await getPokemonsApi();

    console.log("Obtención de todos los Pokémon completa.");
    return pokemonsApi;
  } catch (error) {
    console.log("Error en getAllPokemons:", error.message);
    return [];
  }
};

// Obtener todos los pokemones de la Api + pokemones de la Db
// const getAllPokemons = async () => {
//   try {
//     const pokemonsApi = await getPokemonsApi();
//     const pokemonsDb = await getPokemonsDb();

//     return pokemonsDb ? [...pokemonsApi, ...pokemonsDb] : pokemonsApi;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const getPokemonById = async () => {};

const getPokemonByName = async () => {};

const postPokemon = async () => {};

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  postPokemon,
};
