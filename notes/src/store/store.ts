import { combineReducers, createStore } from "redux";
import { nameReducer } from "./reducers/nameReducer";
import { nameModalReducer } from "./reducers/nameModalReducer";
import { notesReducer } from "./reducers/notesReducer";
import { createNoteReducer } from "./reducers/createNoteReducer";

const rootReducers = combineReducers({
  name: nameReducer,
  visibility: nameModalReducer,
  notes: notesReducer,
  create: createNoteReducer,
});

export const store = createStore(rootReducers);
