import { Switch } from "components";
import { FC, memo } from "react";

export const DKAExperience: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="DKA Expreience In Past 12 Month Requiring Hospitalization"
      name="DKAExpreience"
      control={control}
      checked={state}
    />
  );
});
