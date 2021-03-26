import { Select, SelectOption } from "components";

export const ExerciseType = ({ state, control, errors }) => {
  return (
    <Select
      label="Exercise Type"
      name="ExerciseType"
      control={control}
      value={state["ExerciseType"]}
      error={errors["ExerciseType"]?.message}
      required
    >
      <SelectOption
        value="Casual"
        selected={state["ExerciseType"] === "Casual"}
      >
        Casual
      </SelectOption>
      <SelectOption
        value="Structured"
        selected={state["ExerciseType"] === "Structured"}
      >
        Structured
      </SelectOption>
    </Select>
  );
};
