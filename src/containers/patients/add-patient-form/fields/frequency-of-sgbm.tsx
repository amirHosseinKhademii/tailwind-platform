import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const FrequencyOfSGBM: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Select
      label="Frequency Of SBGM"
      name="FrequencyOfSBGM"
      control={control}
      value={state}
    >
      <SelectOption value="0 < x < 2" selected={state === "0 < x < 2"}>
        {"0 < x < 2"}
      </SelectOption>
      <SelectOption value="2 <= x < 4" selected={state === "2 <= x < 4"}>
        {"2 <= x < 4"}
      </SelectOption>
      <SelectOption value="4 <= x < 8" selected={state === "4 <= x < 8"}>
        {"4 <= x < 8"}
      </SelectOption>
      <SelectOption value=">= 8" selected={state === ">= 8"}>
        {">= 8"}
      </SelectOption>
    </Select>
  );
});
