import { ORDERED_POKEMON } from "../action-types";

export const orderedPokemons = (orderedPokemons) => {
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

