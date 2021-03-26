import { Select, SelectOption } from "components";

export const CurrentCGMWear = ({ control, state }) => {
  return (
    <Select
      label="Current CGM Wear"
      name="CurrentCGMWear"
      control={control}
      value={state["CurrentCGMWear"]}
    >
      <SelectOption value="MDT" selected={state["CurrentCGMWear"] === "MDT"}>
        MDT
      </SelectOption>
      <SelectOption
        value="Dexcom"
        selected={state["CurrentCGMWear"] === "Dexcom"}
      >
        Dexcom
      </SelectOption>
      <SelectOption
        value="Libre"
        selected={state["CurrentCGMWear"] === "Libre"}
      >
        Libre
      </SelectOption>
    </Select>
  );
};
