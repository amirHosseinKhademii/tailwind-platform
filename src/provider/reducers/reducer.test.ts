import { cat } from "./cat";
import { catTypes } from "../types";

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
    expect(cat(initialState, { type: undefined, payload: undefined })).toEqual(
      initialState
    );
  });

  it("should set the current category", () => {
    expect(
      cat(initialState, {
        type: catTypes.SET_CATEGORY,
        payload: "Run the tests",
      })
    ).toEqual({
      ...initialState,
      currentCategory: "Run the tests",
    });
  });
});
