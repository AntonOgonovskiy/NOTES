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
    value: Note[];
  };
}
export type Note = {
  text: string;
  tags: String[];
};
