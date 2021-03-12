import { types } from "utils";

const rootState = {
  categories: {
    data: [],
    loading: false,
    error: null,
  },
};

export const rootReducer = (state = rootState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: { ...state.categories, ...payload },
      };
    default:
      return state;
  }
};
