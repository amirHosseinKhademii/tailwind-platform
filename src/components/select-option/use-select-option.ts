import { useCallback } from "react";

export const useSelectOption = ({ state }) => {
  return {
    handleChange: useCallback(
      ({ value, onChange }) => {
        const existed =
          state !== undefined &&
          state.length > 0 &&
          state.find((item) => item === value);
        const payload = existed
          ? [...state.filter((item) => item !== value)]
          : [...state, value];
        onChange(payload);
      },
      [state]
    ),
  };
};
