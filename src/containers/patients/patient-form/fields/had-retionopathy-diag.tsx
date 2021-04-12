import { Switch } from "components";
import { FC, memo } from "react";

export const HadretionopathyDiag: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Have you ever been diagnosed with Retinopathy?"
        name="HadRetionopathyDiagnosis"
        control={control}
        checked={state}
      />
    );
  }
);
