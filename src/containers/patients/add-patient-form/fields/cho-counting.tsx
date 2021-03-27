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
        required
      >
        <SelectOption value="No" selected={state === "No"}>
          No
        </SelectOption>
        <SelectOption value="Beginner" selected={state === "Beginner"}>
          Beginner
        </SelectOption>
        <SelectOption value="Intermediate" selected={state === "Intermediate"}>
          Intermediate
        </SelectOption>
        <SelectOption value="Proficient" selected={state === "Proficient"}>
          Proficient
        </SelectOption>
        <SelectOption value="Other" selected={state === "Other"}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
