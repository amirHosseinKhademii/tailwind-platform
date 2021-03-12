import { rootReducer } from "./root-reducer";
import { types } from "../utils";

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

describe("set current", () => {
  it("should return the initial state", () => {
    expect(
      rootReducer(initialState, { type: undefined, payload: undefined })
    ).toEqual(initialState);
  });

  it("should set the current category", () => {
    expect(
      rootReducer(initialState, {
        type: types.SET_CATEGORY,
        payload: "Run the tests",
      })
    ).toEqual({
      ...initialState,
      currentCategory: "Run the tests",
    });
  });
});
