import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./authConstants";
import { setErrors } from "../error/errorActions";
import { setMessages } from "../message/messageActions";

// set user from decoded token
export const setCurrentUser = (decoded) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

// handles user registration with api
export const registerUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));
  axios
    .post("/api/auth/register", userData)
    .then((res) => {
      const { token } = res.data;

      // sets token in localStorage
      localStorage.setItem("jwtToken", token);
      // sets token in default axios header
      setAuthToken(token);

      // decode token to set user in state
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));

      history.push("/dashboard");
    })
    .catch((err) => dispatch(setErrors(err)));
};

// handles login with api
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));

  axios
    .post("/api/auth/login", userData)
    .then((res) => {
      const { token } = res.data;

      // decode token to set user in state
      localStorage.setItem("jwtToken", token);
      // sets token in default axios header
      setAuthToken(token);

      // decode token to set user in state
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));

      history.push("/dashboard");
    })
    .catch((err) => dispatch(setErrors(err)));
};

// handles user logout
export const logoutUser = (history) => (dispatch) => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");

  // removes auth header
  setAuthToken(false);

  // removes user in state
  dispatch(setCurrentUser({}));

  history.push("/");
};

// handles user update with api
export const updateUser = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));

  axios
    .put("/api/auth/updateUser", userData)
    .then((res) => {
      const { token, message } = res.data;

      // sets token in localStorage
      localStorage.setItem("jwtToken", token);
      // sets token in default axios header
      setAuthToken(token);

      // decode token to set user in state
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));

      // set response messages in state
      dispatch(setMessages(message));

      // clear messages after 2.5 seconds
      setTimeout(() => {
        dispatch(setMessages({}));
      }, 2500);
      // history.push("/dashboard");
    })
    .catch((err) => dispatch(setErrors(err)));
};

export const passResetReq = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));
  dispatch(setMessages({}));

  axios
    .post("/api/auth/requestPasswordReset", userData)
    .then((res) => {
      const { message } = res.data;

      // set response messages in state
      dispatch(setMessages(message));

      setTimeout(() => {
        dispatch(setMessages({}));
        history.push("/login");
      }, 2000);
    })
    .catch((err) => {
      dispatch(setErrors(err));
      setTimeout(() => {
        dispatch(setErrors({ response: { data: {} } }));
      }, 3000);
    });
};

export const passwordReset = (userData, history) => (dispatch) => {
  dispatch(setErrors({ response: { data: {} } }));
  dispatch(setMessages({}));

  axios
    .post("/api/auth/resetPassword", userData)
    .then((res) => {
      const { message } = res.data;

      // set response messages in state
      dispatch(setMessages(message));

      // clear messages after 2 seconds and redirect
      setTimeout(() => {
        dispatch(setMessages({}));
        history.push("/login");
      }, 2000);
    })
    .catch((err) => dispatch(setErrors(err)));
};
