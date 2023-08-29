import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMON_BY_TIPE,
  PAGINATE,
  CLEAR_STATE,
} from "../actions/action-types";

const initialState = {
  allPokemons: [],
  newPokemon: false,
  pokemonsFilteredByType: [],
  pokemonByName: [],
  pokemonById: [],
  pokemonTypes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_POKEMON:
      return {
        ...state,
        newPokemon: action.payload,
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
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
    case FILTER_POKEMON_BY_TIPE:
      const allPokemons = state.allPokemons;
      const typeFiltered =
        action.payload === "type"
          ? allPokemons
          : allPokemons.filter((e) => e.types.includes(action.payload));

      return {
        ...state,
        pokemonsFilteredByType: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
