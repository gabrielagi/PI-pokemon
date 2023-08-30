import { GET_TYPES } from "../action-types";

import axios from "axios";

const endpointTypes = "http://localhost:3001/types";

export const getTypes = () => {
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
