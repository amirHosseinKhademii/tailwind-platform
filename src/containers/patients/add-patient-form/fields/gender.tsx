import { Select, SelectOption } from "components";

export const Gender = ({ control, state, errors }) => {
  return (
    <Select
      control={control}
      label="Gender"
      name="Gender"
      value={state["Gender"]}
      error={errors["Gender"]?.message}
      required
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
