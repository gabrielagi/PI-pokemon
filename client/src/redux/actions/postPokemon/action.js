import { POST_POKEMON } from "../action-types";

import axios from "axios";

const endpoint = "http://localhost:3001/pokemons";

export const postPokemon = (pokemon) => {
  //const endpoint = "http://localhost:3001/pokemons";
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
