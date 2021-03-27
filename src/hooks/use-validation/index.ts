import { useCallback } from "react";

export const useValidation = (props: {
  required?: boolean | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
}) => {
  const { required, min, max } = props;

  return {
    validate: useCallback(
      (value) => {
        if (required && !value) return "This Field Is Required.";
        if (max && value.length > max)
          return `This Filed Must Be Equal Or Less Than ${max} Characters.`;
        if (min && value.length < min)
          return `This Filed Must Be Equal Or More Than ${min} Characters.`;
      },
      [required, min, max]
    ),
  };
};
