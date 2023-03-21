const defaultValue = {
  value: false,
};

export const nameModalReducer = (
  state = defaultValue,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "VISIBLE": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
