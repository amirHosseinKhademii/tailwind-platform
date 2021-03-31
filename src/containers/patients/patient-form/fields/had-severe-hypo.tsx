import { Switch } from "components";
import { FC, memo } from "react";

export const HadSevereHypo: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="Had Severe Hypoglycaemia Events Requiring 3rd Party Assistance?"
      name="HadSevereHypoglycaemiaEvents"
      control={control}
      checked={state}
    />
  );
});
