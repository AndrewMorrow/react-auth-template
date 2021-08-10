import { SET_MESSAGES } from "./messageConstants";

// sets messages in state
export const setMessages = (message) => (dispatch) => {
  // console.log(message);
  dispatch({
    type: SET_MESSAGES,
    payload: message,
  });
};
