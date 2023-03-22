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
export interface Creating {
  create: {
    value: string;
  };
}
export interface Changing {
  change: {
    value: string;
  };
}
export interface ChangingData {
  changeData: {
    value: {
      title: string;
      index: number;
    };
  };
}
export interface Notes {
  notes: {
    value: NoteType[];
  };
}
export interface Filter {
  filter: {
    value: NoteType[];
  };
}
export type NoteType = {
  text: string;
  tags: string[];
};
