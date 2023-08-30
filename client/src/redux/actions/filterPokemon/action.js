import {
  FILTER_POKEMON_BY_TIPE,
  FILTER_POKEMON_BY_DB_CREATED,
  CLEAR_FILTER,
} from "../action-types";

export const filterPokemonByType = (type) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_POKEMON_BY_TIPE,
        payload: type,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterPokemonByDbCreated = (origin) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_POKEMON_BY_DB_CREATED,
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
        payload: origin,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
