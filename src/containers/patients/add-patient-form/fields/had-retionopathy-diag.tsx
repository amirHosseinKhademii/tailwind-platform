import { Switch } from "components";

export const HadretionopathyDiag = ({ control, state }) => {
  return (
    <Switch
      label="Had Retionopathy Diagnosis?"
      name="HadRetionopathyDiagnosis"
      control={control}
      checked={state["HadRetionopathyDiagnosis"]}
    />
  );
};
