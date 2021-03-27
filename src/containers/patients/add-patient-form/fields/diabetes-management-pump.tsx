import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const DiabetesManagementPump: FC<IPatientField> = memo(
  ({ control, state, error }) => {
    return (
      <Select
        label="Diabetes Management Pump"
        name="DiabetesManagementPump"
        control={control}
        value={state}
        error={error}
        required
      >
        <SelectOption value="640G" selected={state === "640G"}>
          640G
        </SelectOption>
        <SelectOption value="670G" selected={state === "670G"}>
          670G
        </SelectOption>
        <SelectOption value="770G" selected={state === "770G"}>
          770G
        </SelectOption>
        <SelectOption value="MDT AHCL" selected={state === "MDT AHCL"}>
          MDT AHCL
        </SelectOption>
        <SelectOption value="Tslim X2" selected={state === "Tslim X2"}>
          Tslim X2
        </SelectOption>
        <SelectOption
          value="Tslim BasallQ"
          selected={state === "Tslim BasallQ"}
        >
          Tslim BasallQ
        </SelectOption>
        <SelectOption value="Ypsomed" selected={state === "Ypsomed"}>
          Ypsomed
        </SelectOption>
        <SelectOption value="Looping" selected={state === "Looping"}>
          Looping
        </SelectOption>
        <SelectOption value="MDI" selected={state === "MDI"}>
          MDI
        </SelectOption>
      </Select>
    );
  }
);
