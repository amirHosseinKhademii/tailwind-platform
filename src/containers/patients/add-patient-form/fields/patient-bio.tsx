import { Input } from "components";
import { FC, memo } from "react";

export const PatientBio: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Patient Bio"
      name="PatientBio"
      register={register}
      error={error}
      required
    />
  );
});
