import { catTypes } from "../../types";

const initialState = {
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

export const cat = (state = initialState, { type, payload }) => {
  switch (type) {
    case catTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: { ...state.categories, ...payload },
      };
    case catTypes.FETCH_IMAGES:
      return {
        ...state,
        images: { ...state.images, ...payload },
      };
    case catTypes.SET_CATEGORY:
      return {
        ...state,
        currentCategory: payload,
      };
    default:
      return state;
  }
};
