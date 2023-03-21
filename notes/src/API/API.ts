import { Note } from "../types";
import data from "./server.json";
export const getNotes = (): Note[] => {
  return data;
};
