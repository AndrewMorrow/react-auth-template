import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./authConstants";

export const setCurrentUser = (decoded) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

export const setErrors = (err) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
  });
};

export const registerUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));
  axios
    .post("/api/auth/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => dispatch(setErrors(err)));
};
