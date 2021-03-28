import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CHOCounting: FC<IPatientField> = memo(
  ({ control, state, error }) => {
    return (
      <Select
        label="CHO Counting"
        name="CHOCounting"
        control={control}
        value={state}
        error={error}
      >
        <SelectOption value="DAFNE" selected={state === "DAFNE"}>
          DAFNE
        </SelectOption>
        <SelectOption value="Food App" selected={state === "Food App"}>
          Food App
        </SelectOption>
        <SelectOption
          value="Other with text option"
          selected={state === "Other with text option"}
        >
          Other with text option
        </SelectOption>

        <SelectOption value="No" selected={state === "No"}>
          No
        </SelectOption>
      </Select>
    );
  }
);
