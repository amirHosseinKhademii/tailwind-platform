import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import { actions } from ".";
import { catTypes } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = [
  { id: 5, name: "boxes" },
  { id: 15, name: "clothes" },
  { id: 1, name: "hats" },
  { id: 14, name: "sinks" },
  { id: 2, name: "space" },
  { id: 4, name: "sunglasses" },
  { id: 7, name: "ties" },
];

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_SUCCESS when fetching  has been done", () => {
    fetchMock.getOnce("/categories", {});

    const expectedActions = [
      {
        type: catTypes.FETCH_CATEGORIES,
        payload: {
          data,
        },
      },
    ];

    const store = mockStore({ categories: {} });

    return store.dispatch(actions.fetchTest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
