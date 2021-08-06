import { SET_MESSAGES } from "./messageConstants";

export const setMessages = (message) => (dispatch) => {
  // console.log(message);
  dispatch({
    type: SET_MESSAGES,
    payload: message,
  });
};
