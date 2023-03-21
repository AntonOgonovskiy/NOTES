import { combineReducers, createStore } from "redux";
import { nameReducer } from "./reducers/nameReducer";
import { nameModalReducer } from "./reducers/nameModalReducer";
import { notesReducer } from "./reducers/notesReducer";

const rootReducers = combineReducers({
  name: nameReducer,
  visibility: nameModalReducer,
  notes: notesReducer,
});

export const store = createStore(rootReducers);
