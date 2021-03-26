import { Select, SelectOption } from "components";

export const PastCGMWear = ({ control, state, errors }) => {
  return (
    <Select
      label="Past CGM Wear"
      name="PastCGMWear"
      control={control}
      value={state["PastCGMWear"]}
      error={errors["PastCGMWear"]?.message}
      required
    >
      <SelectOption value="MDT" selected={state["PastCGMWear"] === "MDT"}>
        MDT
      </SelectOption>
      <SelectOption value="Dexcom" selected={state["PastCGMWear"] === "Dexcom"}>
        Dexcom
      </SelectOption>
      <SelectOption value="Libre" selected={state["PastCGMWear"] === "Libre"}>
        Libre
      </SelectOption>
    </Select>
  );
};
