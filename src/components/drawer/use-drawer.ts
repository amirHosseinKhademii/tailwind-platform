import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: useCallback(() => setOpen(!open), [open]),
  };
};
