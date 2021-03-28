import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Insulin: FC<IPatientField> = memo(({ state, control }) => {
  return (
    <Select
      label="Insulin"
      name="Insulin"
      control={control}
      value={state}
      multiple
    >
      <SelectOption
        value="Novorapid"
        selected={state && state.includes("Novorapid")}
      >
        Novorapid
      </SelectOption>
      <SelectOption
        value="Humalog"
        selected={state && state.includes("Humalog")}
      >
        Humalog
      </SelectOption>
      <SelectOption
        value="Levemir"
        selected={state && state.includes("Levemir")}
      >
        Levemir
      </SelectOption>
      <SelectOption value="Lantus" selected={state && state.includes("Lantus")}>
        Lantus
      </SelectOption>
      <SelectOption value="Fiasp" selected={state && state.includes("Fiasp")}>
        Fiasp
      </SelectOption>
      <SelectOption value="Toujeo" selected={state && state.includes("Toujeo")}>
        Toujeo
      </SelectOption>
      <SelectOption value="Tjoa" selected={state && state.includes("Tjoa")}>
        Tjoa
      </SelectOption>
      <SelectOption
        value="Solostar"
        selected={state && state.includes("Solostar")}
      >
        Solostar
      </SelectOption>
      <SelectOption
        value="Ryzodeg"
        selected={state && state.includes("Ryzodeg")}
      >
        Ryzodeg
      </SelectOption>
      <SelectOption
        value="optisulin"
        selected={state && state.includes("optisulin")}
      >
        optisulin
      </SelectOption>
    </Select>
  );
});
