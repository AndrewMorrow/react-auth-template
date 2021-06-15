import { GET_ERRORS } from "./errorConstants";

export const setErrors = (err) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
  });
};
