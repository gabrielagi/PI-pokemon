import {
  FILTER_POKEMON_BY_TYPE,
  FILTER_POKEMON_BY_ORIGIN,
  CLEAR_FILTER,
} from "../action-types";

export const filterPokemonByType = (pokemonsByType) => {
  return async (dispatch) => {
    try {
      console.log("LLegue al dispatch de type");
      dispatch({
        type: FILTER_POKEMON_BY_TYPE,
        payload: pokemonsByType,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterPokemonByOrigin = (pokemonsByOrigin) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_POKEMON_BY_ORIGIN,
        payload: pokemonsByOrigin,
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
