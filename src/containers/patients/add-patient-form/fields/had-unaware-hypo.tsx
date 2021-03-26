import { Switch } from "components/switch";

export const HadUnawareHypo = ({ state, control }) => {
  return (
    <Switch
      label="Had Unaware Hypo?"
      name="HadUnawareHypo"
      control={control}
      checked={state["HadUnawareHypo"]}
    />
  );
};
