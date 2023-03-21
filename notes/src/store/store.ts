import { combineReducers, createStore } from "redux";
import { nameReducer } from "./reducers/nameReducer";
import { nameModalReducer } from "./reducers/nameModalReducer";

const rootReducers = combineReducers({
  name: nameReducer,
  visibility: nameModalReducer,
});

export const store = createStore(rootReducers);
