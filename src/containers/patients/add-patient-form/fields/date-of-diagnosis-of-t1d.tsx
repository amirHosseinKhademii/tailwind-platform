import { Input } from "components/input";

export const DateOfDiagnosisOfT1D = ({ register, errors }) => {
  return (
    <Input
      label="Date Of Diagnosis Of T1D"
      name="DateOfDiagnosisOfT1D"
      type="date"
      register={register}
      error={errors["DateOfDiagnosisOfT1D"]?.message}
      required
    />
  );
};
