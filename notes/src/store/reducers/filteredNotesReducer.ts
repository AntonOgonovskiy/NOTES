import { getNotes } from "../../API/API";
import { NoteType } from "../../types";

const defaultList = {
  value: getNotes() as NoteType[],
};

export const filteredNotesReducer = (
  state = defaultList,
  action: { type: string; payload: string[] }
) => {
  switch (action.type) {
    case "FILTEREDNOTES": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
