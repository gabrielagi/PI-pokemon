import { CHANGE_PAGE } from "../action-types";

export const changePage = (direction) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CHANGE_PAGE,
        payload: direction, // Puede ser "next" o "prev"
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
