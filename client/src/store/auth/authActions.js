import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./authConstants";
import { setErrors } from "../error/errorActions";

export const setCurrentUser = (decoded) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

export const registerUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));
  axios
    .post("/api/auth/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => {
      dispatch(setErrors(err));
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));

  axios
    .post("/api/auth/login", userData)
    .then((res) => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push("/");
    })
    .catch((err) => dispatch(setErrors(err)));
};

export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("jwtToken");

  setAuthToken(false);

  dispatch(setCurrentUser({}));
  console.log(history);
  history.push("/");
};

export const updateUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));

  axios
    .put("/api/auth/updateUser", userData)
    .then((res) => {
      const { token, message } = res.data;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      return message;
      // history.push("/dashboard");
    })
    .catch((err) => dispatch(setErrors(err)));
};