import { Select, SelectOption } from "components";

export const PreviousStudy3 = ({ control, state, errors }) => {
  return (
    <Select
      label="Previous Study 3"
      name="PreviousStudy3"
      control={control}
      multiple
      value={state["PreviousStudy3"]}
      error={errors["PreviousStudy3"]?.message}
      required
    >
      <SelectOption
        value="Study 1"
        selected={
          state["PreviousStudy3"] && state["PreviousStudy3"].includes("Study 1")
        }
      >
        Study 1
      </SelectOption>
      <SelectOption
        value="Other"
        selected={
          state["PreviousStudy3"] && state["PreviousStudy3"].includes("Other")
        }
      >
        Other
      </SelectOption>
    </Select>
  );
};
