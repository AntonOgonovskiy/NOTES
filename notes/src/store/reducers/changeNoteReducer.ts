const defaultValue = {
  value: false,
};

export const changeNoteReducer = (
  state = defaultValue,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "CHANGING": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
