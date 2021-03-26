import { Select, SelectOption } from "components";

export const PreviousStudy2 = ({ control, state }) => {
  return (
    <Select
      label="Previous Study 2"
      name="PreviousStudy2"
      control={control}
      multiple
      value={state["PreviousStudy2"]}
    >
      <SelectOption
        value="Study 1"
        selected={
          state["PreviousStudy2"] && state["PreviousStudy2"].includes("Study 1")
        }
      >
        Study 1
      </SelectOption>
      <SelectOption
        value="Other"
        selected={
          state["PreviousStudy2"] && state["PreviousStudy2"].includes("Other")
        }
      >
        Other
      </SelectOption>
    </Select>
  );
};
