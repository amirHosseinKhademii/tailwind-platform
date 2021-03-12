const rootState = {
  todos: [],
};

export const rootReducer = (state = rootState, { type, payload }) => {
  switch (type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};
