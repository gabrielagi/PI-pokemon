import { ADD_FAV, REMOVE_FAV } from "../action-types";
import axios from "axios";

const endpoint = "http://localhost:3001/pokemons/favorites";

export const addFav = (id) => {
  console.log("en la action", id);
  console.log("en la action el id", id.id);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, id);
      console.log("pokemones de data", data);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      // Puedes disparar una acción de manejo de errores si lo deseas.
    }
  };
};

export const removeFav = (pokemon) => {
  return async (dispatch) => {
    try {
      console.log("remove porkemon by id", pokemon.id);
      console.log("remove el pokemon", pokemon);
      const { data } = await axios.delete(`${endpoint}/${pokemon.id}`);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
