import {
  FILTER_POKEMON_BY_TYPE,
  FILTER_POKEMON_BY_ORIGIN,
  CLEAR_FILTER,
} from "../action-types";

export const filterPokemonByType = (pokemonsByType) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_POKEMON_BY_TYPE,
        payload: pokemonsByType,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterPokemonByOrigin = (origin) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_POKEMON_BY_ORIGIN,
        payload: origin,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const clearFilter = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAR_FILTER,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
