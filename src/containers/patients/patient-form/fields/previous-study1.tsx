import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PreviousStudy1: FC<IPatientField> = memo(
  ({ state, control, error }) => {
    return (
      <Select
        label="Previous Study"
        name="PreviousStudy"
        control={control}
        value={state}
        error={error}
        required
        multiple
      >
        <SelectOption
          value="Biocapillary Pilot"
          selected={state && state.includes("Biocapillary Pilot")}
          disabled={state && state.includes("Null")}
        >
          Biocapillary Pilot
        </SelectOption>
        <SelectOption
          value="All in One"
          selected={state && state.includes("All in One")}
          disabled={state && state.includes("Null")}
        >
          All in One
        </SelectOption>
        <SelectOption
          value="Glysens PAVE"
          selected={state && state.includes("Glysens PAVE")}
          disabled={state && state.includes("Null")}
        >
          Glysens PAVE
        </SelectOption>
        <SelectOption
          value="Glysens FREE"
          selected={state && state.includes("Glysens FREE")}
          disabled={state && state.includes("Null")}
        >
          Glysens FREE
        </SelectOption>
        <SelectOption
          value="Additional Signals PWOD"
          selected={state && state.includes("Additional Signals PWOD")}
          disabled={state && state.includes("Null")}
        >
          Additional Signals PWOD
        </SelectOption>
        <SelectOption
          value="Fiasp Original V1"
          selected={state && state.includes("Fiasp Original V1")}
          disabled={state && state.includes("Null")}
        >
          Fiasp Original V1
        </SelectOption>
        <SelectOption
          value="Fiasp Extension V2"
          selected={state && state.includes("Fiasp Extension V2")}
          disabled={state && state.includes("Null")}
        >
          Fiasp Extension V2
        </SelectOption>
        <SelectOption
          value="Clear"
          selected={state && state.includes("Clear")}
          disabled={state && state.includes("Null")}
        >
          Clear
        </SelectOption>
        <SelectOption
          value="FAME 1 EYE"
          selected={state && state.includes("FAME 1 EYE")}
          disabled={state && state.includes("Null")}
        >
          FAME 1 EYE
        </SelectOption>
        <SelectOption
          value="MEWS"
          selected={state && state.includes("MEWS")}
          disabled={state && state.includes("Null")}
        >
          MEWS
        </SelectOption>
        <SelectOption
          value="Serodus"
          selected={state && state.includes("Serodus")}
          disabled={state && state.includes("Null")}
        >
          Serodus
        </SelectOption>
        <SelectOption
          value="FLASH"
          selected={state && state.includes("FLASH")}
          disabled={state && state.includes("Null")}
        >
          FLASH
        </SelectOption>
        <SelectOption
          value="Insulet"
          selected={state && state.includes("Insulet")}
          disabled={state && state.includes("Null")}
        >
          Insulet
        </SelectOption>
        <SelectOption
          value="Additional Signals"
          selected={state && state.includes("Additional Signals")}
          disabled={state && state.includes("Null")}
        >
          Additional Signals
        </SelectOption>
        <SelectOption
          value="Optimapp"
          selected={state && state.includes("Optimapp")}
          disabled={state && state.includes("Null")}
        >
          Optimapp
        </SelectOption>
        <SelectOption
          value="Biocap Feasibility"
          selected={state && state.includes("Biocap Feasibility")}
          disabled={state && state.includes("Null")}
        >
          Biocap Feasibility
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
