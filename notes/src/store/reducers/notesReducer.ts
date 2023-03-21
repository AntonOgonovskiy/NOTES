import { getNotes } from "../../API/API";
import { Note } from "../../types";

const defaultList = {
  value: getNotes() as Note[],
};

export const notesReducer = (
  state = defaultList,
  action: { type: string; payload: String[] }
) => {
  switch (action.type) {
    case "NOTES": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
