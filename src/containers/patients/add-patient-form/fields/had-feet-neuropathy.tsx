import { Switch } from "components/switch";
import { FC, memo } from "react";

export const HadFeetNeuropathy: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Had Feet Neuropathy?"
        name="HadFeetNeuropathy"
        control={control}
        checked={state}
      />
    );
  }
);
