import { Input } from "components";

export const DiabeticMedicalHistory = ({ register, errors }) => {
  return (
    <Input
      label="Diabetic & Medical History"
      name="DiabeticHistory"
      register={register}
      error={errors["DiabeticHistory"]?.message}
      required
    />
  );
};
