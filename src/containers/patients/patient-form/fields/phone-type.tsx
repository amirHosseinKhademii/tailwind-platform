import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PhoneType: FC<IPatientField> = memo(
  ({ state, control, error }) => {
    return (
      <Select
        label="Phone Type"
        name="PhoneType"
        control={control}
        value={state}
        error={error}
        multiple
        required
      >
        <SelectOption
          value="Android"
          selected={state && state.includes("Android")}
          disabled={state && state.includes("Null")}
        >
          Android
        </SelectOption>
        <SelectOption
          value=" IOS"
          selected={state && state.includes(" IOS")}
          disabled={state && state.includes("Null")}
        >
          IOS
        </SelectOption>
        <SelectOption
          value="Windows"
          selected={state && state.includes("Windows")}
          disabled={state && state.includes("Null")}
        >
          Windows
        </SelectOption>
        <SelectOption
          value="Other"
          selected={state && state.includes("Other")}
          disabled={state && state.includes("Null")}
        >
          Other
        </SelectOption>
        <SelectOption value="Null" selected={state && state.includes("Null")}>
          Null
        </SelectOption>
      </Select>
    );
  }
);
