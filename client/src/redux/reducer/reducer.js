import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMON_BY_TIPE,
  FILTER_POKEMON_BY_DB_CREATED,
  CHANGE_PAGE,
  CLEAR_FILTER,
} from "../actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonsFilteredByType: [],
  pokemonByName: [],
  pokemonById: [],
  pokemonTypes: [],
  currentPage: 0,
  pokemonsInActualPage: [],
};

const reducer = (state = initialState, action) => {
  const pokemonsPerPage = 12;
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
        pokemonsPerPage: [...action.payload].slice(0, pokemonsPerPage),
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
      const currentPage = state.currentPage;
      const totalPages = Math.ceil(
        state.allPokemons.length / state.pokemonsPerPage
      );
      if (action.payload === "next" && currentPage < totalPages - 1) {
        return {
          ...state,
          currentPage: currentPage + 1,
          pokemonsInActualPage: [...state.allPokemons].slice(
            (currentPage + 1) * state.pokemonsPerPage,
            (currentPage + 2) * state.pokemonsPerPage
          ),
        };
      }

      if (action.payload === "prev" && currentPage > 0) {
        return {
          ...state,
          currentPage: currentPage - 1,
          pokemonsInActualPage: [...state.allPokemons].slice(
            (currentPage - 1) * state.pokemonsPerPage,
            currentPage * state.pokemonsPerPage
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
