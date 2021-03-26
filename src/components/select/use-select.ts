import { useCallback } from "react";

export const useSelect = ({ required }) => {
  return {
    validate: useCallback(
      (value) =>
        required
          ? !value || !value.length
            ? "This Field Is Required."
            : undefined
          : undefined,
      [required]
    ),
  };
};
