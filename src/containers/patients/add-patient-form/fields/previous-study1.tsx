import { Select, SelectOption } from "components";

export const PreviousStudy1 = ({ state, control, errors }) => {
  return (
    <Select
      label="Previous Study 1"
      name="PreviousStudy1"
      control={control}
      value={state["PreviousStudy1"]}
      error={errors["PreviousStudy1"]?.message}
      required
      multiple
    >
      <SelectOption
        value="Study 1"
        selected={
          state["PreviousStudy1"] && state["PreviousStudy1"].includes("Study 1")
        }
      >
        Study 1
      </SelectOption>
      <SelectOption
        value="Other"
        selected={
          state["PreviousStudy1"] && state["PreviousStudy1"].includes("Other")
        }
      >
        Other
      </SelectOption>
    </Select>
  );
};
