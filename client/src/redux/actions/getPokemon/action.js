import {
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_SEARCHBAR,
  CLEAR_SEARCH,
} from "../action-types";

import axios from "axios";

const endpoint = "http://localhost:3001/pokemons";

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/?name=${name}`);
      if (Array.isArray(data) && data.length > 0) {
        const dataPokemon = data[0];
        dispatch({
          type: GET_POKEMON_BY_SEARCHBAR,
          payload: dataPokemon,
        });
      } else {
        alert("El Pokemon no se encuentra en la lista de Pokemons");
      }
    } catch (error) {
      alert("Hubo un error al buscar el Pokemon");
    }
  };
};

export const getPokemonById = (id) => {
  //const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/${id}`);
      dispatch({
        type: GET_POKEMON_BY_SEARCHBAR,
        payload: data,
      });
    } catch (error) {
      alert("El Pokemon no se encuentra en la lista de Pokemons");
    }
  };
};

export const clearSearch = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAR_SEARCH,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
