import { useCallback, useState } from "react";

export const useDrawer = (initialState) => {
  const [open, setOpen] = useState(initialState);

  return {
    open,
    toggle: useCallback(() => setOpen(!open), [open]),
  };
};
