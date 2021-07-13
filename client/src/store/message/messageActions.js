import { GET_MESSAGES } from "./messageConstants";

export const setMessages = (message) => (dispatch) => {
  // console.log(message);
  dispatch({
    type: GET_MESSAGES,
    payload: message,
  });
};
