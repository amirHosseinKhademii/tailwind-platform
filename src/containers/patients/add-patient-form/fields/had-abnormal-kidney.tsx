import { Switch } from "components";
import { FC, memo } from "react";

export const HadAbnormalKidney: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Had Abnormal kidney Function Diagnosis?"
        name="HadAbnormalkidney"
        control={control}
        checked={state}
      />
    );
  }
);
