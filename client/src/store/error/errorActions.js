import { GET_ERRORS } from "./errorConstants";

// sets errors in state
export const setErrors = (err) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
  });
};
