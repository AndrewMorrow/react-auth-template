import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducer imports

// sets up state variables and reducers to modify them
const reducer = combineReducers({
  // stateVariable : importedReducer
});


// setup initial state variables
const initialState = {
  // initial variables here
};

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;