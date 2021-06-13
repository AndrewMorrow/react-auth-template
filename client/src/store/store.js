import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducer imports
import { userAuthReducer } from "./auth/authReducers";

// sets up state variables and reducers to modify them
const reducer = combineReducers({
  // stateVariable : importedReducer
  auth: userAuthReducer,
});

// setup initial state variables
const initialState = {
  // initial variables here
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
