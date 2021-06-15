import _ from "lodash/core";
import { SET_CURRENT_USER } from "./authConstants";

export const userInitialState = {
  isAuthenticated: false,
  user: {},
  error: {},
};

export const userAuthReducer = function (state = userInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
};
