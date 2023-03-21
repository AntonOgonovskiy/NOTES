import { combineReducers, createStore } from "redux";
import { nameReducer } from "./reducers/nameReducer";
import { nameModalReducer } from "./reducers/nameModalReducer";
import { notesReducer } from "./reducers/notesReducer";
import { createNoteReducer } from "./reducers/createNoteReducer";
import { filteredNotesReducer } from "./reducers/filteredNotesReducer";

const rootReducers = combineReducers({
  name: nameReducer,
  visibility: nameModalReducer,
  notes: notesReducer,
  create: createNoteReducer,
  filter: filteredNotesReducer,
});

export const store = createStore(rootReducers);
