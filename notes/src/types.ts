export interface Name {
  name: {
    value: string;
  };
}
export interface Visible {
  visibility: {
    value: string;
  };
}
export interface Notes {
  notes: {
    value: NoteType[];
  };
}
export type NoteType = {
  text: string;
  tags: string[];
};
