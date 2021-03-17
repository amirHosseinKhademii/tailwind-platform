import { createContext, useReducer } from "react";

export const UiContext = createContext(undefined);

const initialState = {
  drawer: { open: false },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawer: { ...state.drawer, open: !state.drawer.open },
      };

    default:
      return state;
  }
};

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState);
  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  );
};
