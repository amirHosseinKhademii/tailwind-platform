import { Switch } from "components";
import { FC, memo } from "react";

export const HadAbnormalKidney: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Have you ever been diagnosed with abnormal kidney function?"
        name="HadAbnormalkidney"
        control={control}
        checked={state}
      />
    );
  }
);
