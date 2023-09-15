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
  CLEAR_ORDER,
  CLEAR_HOME_STATE,
  DELETE_POKEMON_BY_ID,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonsFilteredByType: [],
  pokemonsFilteredByOrigin: [],
  pokemonsOrdered: [],
  pokemonBySearchbar: {},
  pokemonTypes: [],
  isFiltered: false,
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
    case CLEAR_HOME_STATE:
      return {
        ...state,
        allPokemons: [],
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case GET_POKEMON_BY_SEARCHBAR:
      console.log("pokemon por nombre", action.payload);
      return {
        ...state,
        pokemonBySearchbar: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        pokemonBySearchbar: {},
      };
    case FILTER_POKEMON_BY_TYPE:
      console.log("LLegue al reducer TYPE");
      return {
        ...state,
        pokemonsFilteredByType: action.payload,
        isFiltered: true,
      };
    case FILTER_POKEMON_BY_ORIGIN:
      console.log("LLegue al reducer ORIGIN");
      return {
        ...state,
        pokemonsFilteredByType: action.payload,
        isFiltered: true,
      };
    case CLEAR_FILTER:
      console.log("Todos los filtros limpios", state.allPokemons);
      return {
        ...state,
        pokemonsFilteredByType: [],
        isFiltered: false,
      };
    case ORDERED_POKEMON:
      console.log("Llegue al reducer Ordered");
      return {
        ...state,
        isOrdered: true,
        pokemonsOrdered: action.payload,
        isFiltered: false,
      };
    case CLEAR_ORDER:
      console.log("Pokemons Ordered en CLEAR ORDER");
      return {
        ...state,
        pokemonsOrdered: [],
        isOrdered: false,
      };
    case DELETE_POKEMON_BY_ID:
      const deletedPokemonId = action.payload;
      const updatedPokemons = state.allPokemons.filter(
        (pokemon) => pokemon.id !== deletedPokemonId
      );
      return {
        ...state,
        allPokemons: updatedPokemons,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
