const defaultValue = {
  value: "",
};

export const changeNoteData = (
  state = defaultValue,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "CHANGINGDATA": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
