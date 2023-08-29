import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER,
  PAGINATE,
  CLEAR_STATE,
} from "../actions/action-types";

const initialState = {
  allPokemons: [],
  newPokemon: false,
  filteredPokemons: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
