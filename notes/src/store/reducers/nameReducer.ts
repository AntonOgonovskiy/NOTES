const defaultName = {
  value: localStorage.getItem("name") ? localStorage.getItem("name") : "Guest",
};

export const nameReducer = (
  state = defaultName,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
