import { Input } from "components";

export const PatientBio = ({ register, errors }) => {
  return (
    <Input
      label="Patient Bio"
      name="PatientBio"
      register={register}
      error={errors["PatientBio"]?.message}
      required
    />
  );
};
