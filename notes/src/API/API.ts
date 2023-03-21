import { NoteType } from "../types";
import data from "./server.json";
export const getNotes = (): NoteType[] => {
  return data;
};
