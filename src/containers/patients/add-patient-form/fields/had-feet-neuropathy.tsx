import { Switch } from "components/switch";

export const HadFeetNeuropathy = ({ control, state }) => {
  return (
    <Switch
      label="Had Feet Neuropathy?"
      name="HadFeetNeuropathy"
      control={control}
      checked={state["HadFeetNeuropathy"]}
    />
  );
};
