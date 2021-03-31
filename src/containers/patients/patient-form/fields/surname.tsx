import { Input } from "components";
import { FC, memo } from "react";

export const Surname: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Surname"
      name="Surname"
      register={register}
      error={error}
      max={50}
      required
    />
  );
});
