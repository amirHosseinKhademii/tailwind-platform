import { types } from "utils";

const rootState = {
  categories: {
    data: [],
    loading: false,
    error: null,
  },
  images: {
    data: [],
    loading: false,
    error: null,
  },
  currentCategory: null,
};

export const rootReducer = (state = rootState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: { ...state.categories, ...payload },
      };
    case types.FETCH_IMAGES:
      return {
        ...state,
        images: { ...state.images, ...payload },
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        currentCategory: payload,
      };
    default:
      return state;
  }
};
