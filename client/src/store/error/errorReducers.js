import { GET_ERRORS } from "./errorConstants";

export const errorInitialState = {
  
};

export const errorReducer = function (state = errorInitialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};
