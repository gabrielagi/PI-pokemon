import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMON_BY_TIPE,
  FILTER_POKEMON_BY_DB_CREATED,
  CHANGE_PAGE,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonsFilteredByType: [],
  pokemonByName: [],
  pokemonById: [],
  pokemonTypes: [],
  currentPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_POKEMON:
      const newPokemon = action.payload;
      return {
        ...state,
        allPokemons: [...allPokemons, newPokemon],
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
    case FILTER_POKEMON_BY_TIPE:
      const allPokemons = state.allPokemons;
      const typeFiltered =
        action.payload === "none"
          ? allPokemons
          : allPokemons.filter((pokemon) =>
              pokemon.type.includes(action.payload)
            );
      return {
        ...state,
        pokemonsFilteredByType: typeFiltered,
      };
    case FILTER_POKEMON_BY_DB_CREATED:
      const pokemons = state.allPokemons;
      return {
        ...state,
        pokemonsFilteredByType: pokemons.filter(
          (pokemon) => pokemon.createdInDb === true
        ),
      };
    case CHANGE_PAGE:
      console.log("currentPage in reducer", state.currentPage);
      const currentPage = state.currentPage;
      const pokemonsPerPage = state.pokemonsPerPage;
      const totalPages = Math.ceil(state.allPokemons.length / pokemonsPerPage);

      if (action.payload === "next" && currentPage < totalPages - 1) {
        return {
          ...state,
          currentPage: currentPage + 1,
          pokemonsInActualPage: state.allPokemons.slice(
            (currentPage + 1) * pokemonsPerPage,
            (currentPage + 2) * pokemonsPerPage
          ),
        };
      }

      if (action.payload === "prev" && currentPage > 0) {
        return {
          ...state,
          currentPage: currentPage - 1,
          pokemonsInActualPage: state.allPokemons.slice(
            (currentPage - 1) * pokemonsPerPage,
            currentPage * pokemonsPerPage
          ),
        };
      }

      return state;

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
