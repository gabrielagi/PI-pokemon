import { POST_POKEMON } from "../action-types";

import axios from "axios";

const endpoint = "http://localhost:3001/pokemons";

export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, pokemon);
      console.log("El response en arction post", data);
      dispatch({
        type: POST_POKEMON,
        payload: data,
      });
      return data; // Devolver el resultado de la solicitud POST
    } catch (error) {
      console.log(error.message);
      return false; // Devolver false en caso de error
    }
  };
};
