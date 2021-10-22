import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducer imports
import { userAuthReducer } from "./auth/authReducers";
import { errorReducer } from "./error/errorReducers";
import { messageReducer } from "./message/messageReducers";

// sets up state variables and reducers to modify them
const reducers = combineReducers({
  // stateVariable : importedReducer
  auth: userAuthReducer,
  errors: errorReducer,
  messages: messageReducer,
});

// setup initial state variables
const initialState = {
  // initial variables here
};

const middlewares = [thunk];

// setup redux store
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
