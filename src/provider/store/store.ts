import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "provider";

export const middleWares = { thunk };

export const withMiddleWare = applyMiddleware(thunk)(createStore);

export const store = withMiddleWare(rootReducer);
