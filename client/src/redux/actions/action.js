import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER,
  PAGINATE,
} from "./action-types";

import axios from "axios";

export const postPokemon = (pokemon) => {
  const endpoint = "http://localhost:3001/pokemons";

  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, pokemon);
      dispatch({
        type: POST_POKEMON,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
