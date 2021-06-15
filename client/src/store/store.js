import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducer imports
import { userAuthReducer } from "./auth/authReducers";
import { errorReducer } from "./error/errorReducers";

// sets up state variables and reducers to modify them
const reducer = combineReducers({
  // stateVariable : importedReducer
  auth: userAuthReducer,
  errors: errorReducer,
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
