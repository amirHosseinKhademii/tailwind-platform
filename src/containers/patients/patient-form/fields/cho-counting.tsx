import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CHOCounting: FC<IPatientField> = memo(
  ({ control, state, error, register }) => {
    return (
      <Select
        label="CHO Counting"
        name="CHOCounting"
        control={control}
        register={register}
        value={state}
        error={error}
        // setValue={setValue}
        // isInput={isOther}
        // onCancel={() => setIsOther(!isOther)}
        multiple
      >
        <SelectOption
          value="DAFNE"
          selected={state && state.includes("DAFNE")}
          disabled={state && state.includes("Null")}
        >
          DAFNE
        </SelectOption>
        <SelectOption
          value="Food App"
          selected={state && state.includes("Food App")}
          disabled={state && state.includes("Null")}
        >
          Food App
        </SelectOption>
        <SelectOption
          value="Yes"
          selected={state && state.includes("Yes")}
          disabled={(state && state.includes("No")) || state.includes("Null")}
        >
          Yes
        </SelectOption>
        <SelectOption
          disabled={(state && state.includes("Yes")) || state.includes("Null")}
          value="No"
          selected={state && state.includes("No")}
        >
          No
        </SelectOption>
        <SelectOption
          value="Other"
          selected={state && state.includes("Other")}
          // onClick={() => setIsOther(!isOther)}
          disabled={state && state.includes("Null")}
        >
          Other
        </SelectOption>
        <SelectOption value="Null" selected={state && state.includes("Null")}>
          Null
        </SelectOption>
      </Select>
    );
  }
);
