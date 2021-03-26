import { Select, SelectOption } from "components";

export const ExerciseType = ({ state, control }) => {
  return (
    <Select
      label="Exercise Type"
      name="ExerciseType"
      control={control}
      value={state["ExerciseType"]}
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
