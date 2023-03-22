import { combineReducers, createStore } from "redux";
import { nameReducer } from "./reducers/nameReducer";
import { nameModalReducer } from "./reducers/nameModalReducer";
import { notesReducer } from "./reducers/notesReducer";
import { createNoteReducer } from "./reducers/createNoteReducer";
import { filteredNotesReducer } from "./reducers/filteredNotesReducer";
import { changeNoteReducer } from "./reducers/changeNoteReducer";
import { changeNoteData } from "./reducers/changeNoteData";

const rootReducers = combineReducers({
  name: nameReducer,
  visibility: nameModalReducer,
  notes: notesReducer,
  create: createNoteReducer,
  filter: filteredNotesReducer,
  change: changeNoteReducer,
  changeData: changeNoteData,
});

export const store = createStore(rootReducers);
