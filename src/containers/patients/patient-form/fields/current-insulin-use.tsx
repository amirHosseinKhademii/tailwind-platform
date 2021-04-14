import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentInsulinUse: FC<IPatientField> = memo(
  ({ state, control }) => {
    return (
      <Select
        label="Current Insulin Use"
        name="CurrentInsulinUse"
        control={control}
        value={state}
        multiple
      >
        <SelectOption
          value="Novorapid"
          selected={state && state.includes("Novorapid")}
          disabled={state && state.includes("Null")}
        >
          Novorapid
        </SelectOption>
        <SelectOption
          value="Humalog"
          selected={state && state.includes("Humalog")}
          disabled={state && state.includes("Null")}
        >
          Humalog
        </SelectOption>
        <SelectOption
          value="Levemir"
          selected={state && state.includes("Levemir")}
          disabled={state && state.includes("Null")}
        >
          Levemir
        </SelectOption>
        <SelectOption
          value="Lantus"
          selected={state && state.includes("Lantus")}
          disabled={state && state.includes("Null")}
        >
          Lantus
        </SelectOption>
        <SelectOption
          value="Fiasp"
          selected={state && state.includes("Fiasp")}
          disabled={state && state.includes("Null")}
        >
          Fiasp
        </SelectOption>
        <SelectOption
          value="Toujeo"
          selected={state && state.includes("Toujeo")}
          disabled={state && state.includes("Null")}
        >
          Toujeo
        </SelectOption>
        <SelectOption
          value=" Tjoa"
          selected={state && state.includes(" Tjoa")}
          disabled={state && state.includes("Null")}
        >
          Tjoa
        </SelectOption>

        <SelectOption
          value="Solostar"
          selected={state && state.includes("Solostar")}
          disabled={state && state.includes("Null")}
        >
          Solostar
        </SelectOption>
        <SelectOption
          value="Ryzodeg"
          selected={state && state.includes("Ryzodeg")}
          disabled={state && state.includes("Null")}
        >
          Ryzodeg
        </SelectOption>
        <SelectOption
          value="optisulin"
          selected={state && state.includes("optisulin")}
          disabled={state && state.includes("Null")}
        >
          Optisulin
        </SelectOption>
        <SelectOption value="Null" selected={state && state.includes("Null")}>
          Null
        </SelectOption>
      </Select>
    );
  }
);
