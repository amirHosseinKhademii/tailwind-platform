import { useCallback, useContext } from "react";
import { UiContext, uiTypes } from "provider";

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext);

  return {
    uiState,
    toggleDrawer: useCallback(
      () => uiDispatch({ type: uiTypes.TOGGLE_DRAWER }),
      [uiState.drawer.open]
    ),
    toggleDialog: useCallback(
      (payload) => uiDispatch({ type: uiTypes.TOGGLE_DIALOG, payload }),
      [uiState.dialog]
    ),
  };
};
