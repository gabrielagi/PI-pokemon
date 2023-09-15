import { DELETE_POKEMON_BY_ID } from "../action-types";

import axios from "axios";

const endpoint = "http://localhost:3001/pokemons";

export const deletePokemonById = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${endpoint}/${id}`);
      dispatch({
        type: DELETE_POKEMON_BY_ID,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
