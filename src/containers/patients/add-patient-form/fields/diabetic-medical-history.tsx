import { Input } from "components";

export const DiabeticMedicalHistory = ({ register }) => {
  return (
    <Input
      label="Diabetic & Medical History"
      name="DiabeticHistory"
      register={register}
    />
  );
};
