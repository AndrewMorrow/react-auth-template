import { SET_MESSAGES } from "./messageConstants";

export const messageInitialState = {};

export const messageReducer = function (state = messageInitialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
