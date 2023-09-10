import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_SEARCHBAR,
  GET_TYPES,
  FILTER_POKEMON_BY_TYPE,
  FILTER_POKEMON_BY_ORIGIN,
  ORDERED_POKEMON,
  CLEAR_SEARCH,
  CLEAR_FILTER,
  CLEAR_HOME_STATE,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonsFilteredByType: [],
  pokemonsFilteredByOrigin: [],
  pokemonsOrdered: [],
  pokemonBySearchbar: {},
  pokemonTypes: [],
  isFilteredByType: false,
  isFilteredByOrigin: false,
  isOrdered: false,
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
      };
    case GET_POKEMON_BY_SEARCHBAR:
      console.log("pokemon por nombre", action.payload);
      return {
        ...state,
        pokemonBySearchbar: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        pokemonBySearchbar: {},
      };
    case CLEAR_HOME_STATE:
      return {
        ...state,
        allPokemons: [],
      };
    case FILTER_POKEMON_BY_TYPE:
      console.log("LLegue al reducer TYPE");
      return {
        ...state,
        pokemonsFilteredByType: action.payload,
        isFilteredByType: true,
      };
    case FILTER_POKEMON_BY_ORIGIN:
      console.log("LLegue al reducer ORIGIN");
      return {
        ...state,
        pokemonsFilteredByOrigin: action.payload,
        isFilteredByOrigin: true,
      };
    case CLEAR_FILTER:
      console.log("Todos los pokemons", state.allPokemons);
      return {
        ...state,
        pokemonsFilteredByType: [],
        pokemonsFilteredByOrigin: [],
        isFilteredByType: false,
      };
    case ORDERED_POKEMON:
      console.log("Llegue a Ordered");
      return {
        ...state,
        pokemonsOrdered: action.payload,
        isOrdered: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
