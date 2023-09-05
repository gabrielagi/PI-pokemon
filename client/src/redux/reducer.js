import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMON_BY_TYPE,
  FILTER_POKEMON_BY_ORIGIN,
  CLEAR_SEARCH,
  CLEAR_FILTER,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonsFilteredByType: [],
  pokemonsFilteredByOrigin: [],
  pokemonsOrdered: [],
  pokemonByName: [],
  pokemonById: {},
  pokemonTypes: [],
  isFiltered: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_POKEMON:
      const newPokemon = action.payload;
      return {
        ...state,
        allPokemons: [...state.allPokemons, newPokemon],
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        pokemonsInActualPage: [...action.payload].slice(
          0,
          state.pokemonsPerPage
        ),
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        pokemonById: {},
      };
    case FILTER_POKEMON_BY_TYPE:
      console.log("LLegue al reducer de type");
      return {
        ...state,
        pokemonsFilteredByType: action.payload,
        isFiltered: true,
      };
    case FILTER_POKEMON_BY_ORIGIN:
      const pokemons = state.allPokemons;
      const originFiltered =
        action.payload === "db"
          ? pokemons.filter((pokemon) => pokemon.createdInDb === true)
          : pokemons.filter(
              (pokemon) => pokemon.hasOwnProperty("createdInDb") === false
            );
      return {
        ...state,
        pokemonsFilteredByOrigin: originFiltered,
        isFiltered: true,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        pokemonsFilteredByType: [],
        pokemonsFilteredByOrigin: [],
        isFiltered: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
