import { useCallback } from "react";

export const useValidation = (props: {
  later?: boolean | undefined;
  required?: boolean | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
}) => {
  const { required, min, max, later } = props;

  return {
    validate: useCallback(
      (value) => {
        if (required && !value) return "This field is required.";
        if (max && value.length > max)
          return `This field must be equal or less than ${max} characters.`;
        if (min && value.length < min)
          return `This field must be equal or more than ${min} characters.`;
        if (later) {
          const date = new Date();
          const today = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          );
          const start = new Date(value);
          const currentYear = new Date().getFullYear();
          const year = new Date(value).getFullYear();
          if (start <= today) {
            return "The ate should be later than today.";
          }
          if (year < currentYear - 100 || year > currentYear + 100)
            return "Bad format";
        }
      },
      [required, min, max, later]
    ),
  };
};
