import { useCallback, useContext } from "react";
import { UiContext } from "provider";

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext);

  return {
    uiState,
    toggleDrawer: useCallback(() => uiDispatch({ type: "TOGGLE_DRAWER" }), [
      uiState.drawer.open,
    ]),
  };
};
