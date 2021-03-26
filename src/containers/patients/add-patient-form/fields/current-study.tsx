import { Select, SelectOption } from "components";

export const CurrentStudy = ({ control, state, errors }) => {
  return (
    <Select
      label="Current Study"
      name="CurrentStudy"
      control={control}
      multiple
      value={state["CurrentStudy"]}
      error={errors["CurrentStudy"]?.message}
      required
    >
      <SelectOption
        value="Study 1"
        selected={
          state["CurrentStudy"] && state["CurrentStudy"].includes("Study 1")
        }
      >
        Study 1
      </SelectOption>
      <SelectOption
        value="Other"
        selected={
          state["CurrentStudy"] && state["CurrentStudy"].includes("Other")
        }
      >
        Other
      </SelectOption>
    </Select>
  );
};