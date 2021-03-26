import { Switch } from "components";

export const HasInternetAccess = ({ control, state }) => {
  return (
    <Switch
      label="Has Internet Access?"
      name="HasInternetAccess"
      control={control}
      checked={state["HasInternetAccess"]}
    />
  );
};
