import { Switch } from "components";

export const WillComeToSt = ({ control, state }) => {
  return (
    <Switch
      label="Will Come To St Vincent?"
      name="WillComeToStVincent"
      control={control}
      checked={state["WillComeToStVincent"]}
    />
  );
};
