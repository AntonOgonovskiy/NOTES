const defaultValue = {
  value: false,
};

export const createNoteReducer = (
  state = defaultValue,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "CREATING": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
