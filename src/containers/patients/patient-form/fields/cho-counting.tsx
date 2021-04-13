import { Select, SelectOption } from "components";
import { FC, memo, useState } from "react";

export const CHOCounting: FC<IPatientField> = memo(
  ({ control, state, error, register, setValue }) => {
    const [isOther, setIsOther] = useState(false);

    return (
      <Select
        label="CHO Counting"
        name="CHOCounting"
        control={control}
        register={register}
        setValue={setValue}
        value={state}
        error={error}
        isInput={isOther}
        onCancel={() => setIsOther(!isOther)}
        multiple
      >
        <SelectOption value="DAFNE" selected={state && state.includes("DAFNE")}>
          DAFNE
        </SelectOption>
        <SelectOption
          value="Food App"
          selected={state && state.includes("Food App")}
        >
          Food App
        </SelectOption>
        <SelectOption
          value="Yes"
          selected={state && state.includes("Yes")}
          disabled={state && state.includes("No")}
        >
          Yes
        </SelectOption>
        <SelectOption
          disabled={state && state.includes("Yes")}
          value="No"
          selected={state && state.includes("No")}
        >
          No
        </SelectOption>
        <SelectOption
          value="Other"
          selected={state && state.includes("Other")}
          onClick={() => setIsOther(!isOther)}
          disabled={state && state.length > 0}
        >
          Other
        </SelectOption>
      </Select>
    );
  }
);
