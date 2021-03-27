import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PastCGMWear: FC<IPatientField> = memo(
  ({ control, state, error }) => {
    return (
      <Select
        label="Past CGM Wear"
        name="PastCGMWear"
        control={control}
        value={state}
        error={error}
        required
      >
        <SelectOption value="MDT" selected={state === "MDT"}>
          MDT
        </SelectOption>
        <SelectOption value="Dexcom" selected={state === "Dexcom"}>
          Dexcom
        </SelectOption>
        <SelectOption value="Libre" selected={state === "Libre"}>
          Libre
        </SelectOption>
      </Select>
    );
  }
);
