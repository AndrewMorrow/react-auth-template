import { GET_MESSAGES } from "./messageConstants";

export const messageInitialState = {};

export const messageReducer = function (state = messageInitialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
