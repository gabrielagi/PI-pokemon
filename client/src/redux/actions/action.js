import {
  POST_POKEMON,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMON_BY_TIPE,
  FILTER_POKEMON_BY_DB_CREATED,
  PAGINATE,
  CLEAR_FILTER,
} from "./action-types";

import axios from "axios";

const endpoint = "http://localhost:3001/pokemons";
const endpointTypes = "http://localhost:3001/types";

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

export const getTypes = () => {
  //const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpointTypes);
      const typesOrdered = data.sort((a, b) => {
        return a - b;
      });
      dispatch({
        type: GET_TYPES,
        payload: typesOrdered,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      // Llama a la acción getTypes para cargar los tipos en la Db
      await dispatch(getTypes());
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
  //const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/?name=${name}`);
      dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonById = (id) => {
  //const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/${id}`);
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterPokemonByType = (type) => {
  //const endpoint = "http://localhost:3001/pokemons";
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
  //const endpoint = "http://localhost:3001/pokemons";
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
