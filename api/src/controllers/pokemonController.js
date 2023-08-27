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
    return filteredNullPokemons.map((pokemonById) => ({
      id: pokemonById.id,
      name: pokemonById.name,
      imagen: pokemonById.sprites.other.dream_world.front_default,
      hp: pokemonById.stats[0].base_stat,
      attack: pokemonById.stats[1].base_stat,
      defense: pokemonById.stats[2].base_stat,
      speed: pokemonById.stats[5].base_stat,
      height: pokemonById.height,
      weight: pokemonById.weight,
      types: pokemonById.types.map((type) => {
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

const postPokemon = async (
  name,
  img,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  type = "unknown"
) => {
  try {
    if (!name || !img || !hp || !attack || !defense) {
      throw new Error("Faltan completar campos obligatorios");
    }

    console.log("Una imagen enviada controller name", name);
    console.log("Una imagen enviada controller img", img);

    console.log("Una imagen enviada controller hp", hp);
    console.log("Una imagen enviada controller attack", attack);
    console.log("Una imagen enviada controller defense", defense);
    console.log("Una imagen enviada controller speed", speed);

    console.log("Una imagen enviada controller height", height);

    console.log("Una imagen enviada controller weight", weight);

    const pokemon = await Pokemon.create({
      name,
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    const typeList = type.split(","); // Divido la cadena de types para que sea similar a "fire,water,grass"
    typeList.map(async (tipo) => {
      const types = await Type.findOne({ where: { name: tipo } }); // Busco en la tabla Type un registro donde el nombre sea igual a tipo en la base de datos Type
      pokemon.addType(types); // Asocio el tipo encontrado al Pokémon y establezco una relación entre el registro del Pokémon y el registro del tipo en la tabla de asociación
    });

    return pokemon;
  } catch (error) {
    console.log("Error en postPokemon:", error.message);
  }
};

module.exports = {
  getAllPokemons,
  postPokemon,
};
