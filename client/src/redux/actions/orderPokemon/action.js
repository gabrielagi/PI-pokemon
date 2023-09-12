import { ORDERED_POKEMON, CLEAR_ORDER } from "../action-types";

export const orderedPokemon = (orderedPokemons) => {
  return async (dispatch) => {
    try {
      console.log("LLegue al dispatch de Order");
      dispatch({
        type: ORDERED_POKEMON,
        payload: orderedPokemons,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const clearOrder = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAR_ORDER,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
