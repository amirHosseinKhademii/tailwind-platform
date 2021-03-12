export const rootReducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
