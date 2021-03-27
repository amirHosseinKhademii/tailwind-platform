import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PreviousStudy1: FC<IPatientField> = memo(
  ({ state, control, error }) => {
    return (
      <Select
        label="Previous Study 1"
        name="PreviousStudy1"
        control={control}
        value={state}
        error={error}
        required
        multiple
      >
        <SelectOption
          value="Study 1"
          selected={state && state.includes("Study 1")}
        >
          Study 1
        </SelectOption>
        <SelectOption value="Other" selected={state && state.includes("Other")}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
