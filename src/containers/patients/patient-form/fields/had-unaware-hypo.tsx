import { Switch } from "components/switch";
import { FC, memo } from "react";

export const HadUnawareHypo: FC<IPatientField> = memo(({ state, control }) => {
  return (
    <Switch
      label="Had Unaware Hypo?"
      name="HadUnawareHypo"
      control={control}
      checked={state}
    />
  );
});
