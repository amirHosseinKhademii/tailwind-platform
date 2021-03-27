import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentStudy: FC<IPatientField> = memo(
  ({ control, state, error }) => {
    return (
      <Select
        label="Current Study"
        name="CurrentStudy"
        control={control}
        multiple
        value={state}
        error={error}
        required
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
