const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { URL_BASE } = process.env;

// Obtener todos los pokemones de la Api (hasta 40)
const getPokemonsApi = async (req, res) => {
  let pokemonsApi = [];
  try {
    const pokemonsResApi = (await axios.get(`${URL_BASE}?limit=40`)).data
      .results;

    if (pokemonsResApi.length === 0)
      throw new Error("No se encontraron Pokemones");

    const allPokemons = [];
    pokemonsResApi.map(async (pokemon) => {
      try {
        allPokemons.push(await axios.get(pokemon.url));
        // Hace un get a la url de cada elemento para obtener su información
      } catch (error) {
        res.status(404).send(error.message);
      }
    });

    await Promise.all(allPokemons).then((pokemon) => {
      pokemonsApi = pokemon.map((p) => {
        return {
          id: p.data.id,
          name: p.data.name,
          imagen: p.data.sprites.other.dream_world.front_default,
          //p.data.sprites.versions.generation-v.black-white.animated.front_default
          hp: p.data.stats[0].base_stat,
          attack: p.data.stats[1].base_stat,
          defense: p.data.stats[2].base_stat,
          speed: p.data.stats[5].base_stat,
          height: p.data.height,
          weight: p.data.weight,
          types: p.data.types.map((type) => {
            return { name: type.type.name };
          }),
        };
      });
    });
    return pokemonsApi;
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getPokemonsDb = async (req, res) => {
  try {
    const pokemonsDb = await Pokemon.findAll({
      //Traigo todo lo contenido en la tabla Pokemon incluida la relacion con type
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
    res.status(404).send(error.message);
  }
};

const getAllPokemons = async () => {
  try {
    const pokemonsApi = await getPokemonsApi();
    const pokemonsDb = await getPokemonsDb();

    return [...pokemonsApi, ...pokemonsDb];
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getPokemonById = async () => {};

const getPokemonByName = async () => {};

const postPokemon = async () => {};

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  postPokemon,
};
