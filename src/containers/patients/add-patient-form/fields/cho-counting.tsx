import { Select, SelectOption } from "components";

export const CHOCounting = ({ control, state }) => {
  return (
    <Select
      label="CHO Counting"
      name="CHOCounting"
      control={control}
      value={state["CHOCounting"]}
    >
      <SelectOption value="No" selected={state["CHOCounting"] === "No"}>
        No
      </SelectOption>
      <SelectOption
        value="Beginner"
        selected={state["CHOCounting"] === "Beginner"}
      >
        Beginner
      </SelectOption>
      <SelectOption
        value="Intermediate"
        selected={state["CHOCounting"] === "Intermediate"}
      >
        Intermediate
      </SelectOption>
      <SelectOption
        value="Proficient"
        selected={state["CHOCounting"] === "Proficient"}
      >
        Proficient
      </SelectOption>
      <SelectOption value="Other" selected={state["CHOCounting"] === "Other"}>
        Other
      </SelectOption>
    </Select>
  );
};
