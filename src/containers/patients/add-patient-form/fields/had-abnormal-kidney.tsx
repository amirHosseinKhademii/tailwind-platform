import { Switch } from "components";

export const HadAbnormalKidney = ({ control, state }) => {
  return (
    <Switch
      label="Had Abnormal kidney Function Diagnosis?"
      name="HadAbnormalkidney"
      control={control}
      checked={state["HadAbnormalkidney"]}
    />
  );
};
