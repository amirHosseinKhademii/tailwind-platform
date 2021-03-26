import { Switch } from "components";

export const DKAExperience = ({ control, state, errors }) => {
  return (
    <Switch
      label="DKA Expreience In Past 12 Month Requiring Hospitalization"
      name="DKAExpreience"
      control={control}
      checked={state["DKAExpreience"]}
    />
  );
};
