import { Switch } from "components";

export const HadSevereHypo = ({ control, state }) => {
  return (
    <Switch
      label="Had Severe Hypoglycaemia Events Requiring 3rd Party Assistance?"
      name="HadSevereHypoglycaemiaEvents"
      control={control}
      checked={state["HadSevereHypoglycaemiaEvents"]}
    />
  );
};
