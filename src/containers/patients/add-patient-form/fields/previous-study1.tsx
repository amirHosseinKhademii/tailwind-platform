import { Select, SelectOption } from "components";

export const PreviousStudy1 = ({ state, control }) => {
  return (
    <Select
      label="Previous Study 1"
      name="PreviousStudy1"
      control={control}
      multiple
      value={state["PreviousStudy1"]}
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
