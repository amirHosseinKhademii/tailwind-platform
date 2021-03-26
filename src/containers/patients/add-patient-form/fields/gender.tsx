import { Select, SelectOption } from "components";

export const Gender = ({ control, state }) => {
  return (
    <Select
      control={control}
      label="Gender"
      name="Gender"
      value={state["Gender"]}
    >
      <SelectOption value="Male" selected={state["Gender"] === "Male"}>
        Male
      </SelectOption>
      <SelectOption value="Female" selected={state["Gender"] === "Female"}>
        Female
      </SelectOption>
    </Select>
  );
};
