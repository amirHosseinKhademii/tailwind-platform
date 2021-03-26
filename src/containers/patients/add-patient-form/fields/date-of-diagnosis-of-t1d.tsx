import { Input } from "components/input";

export const DateOfDiagnosisOfT1D = ({ register }) => {
  return (
    <Input
      label="Date Of Diagnosis Of T1D"
      name="DateOfDiagnosisOfT1D"
      type="date"
      register={register}
    />
  );
};
