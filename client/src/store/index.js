import reducer from "./reducer";
import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;