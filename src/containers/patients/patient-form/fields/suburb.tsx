import { Input } from "components";
import { FC, memo } from "react";

export const Suburb: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Suburb"
      name="Suburb"
      register={register}
      error={error}
      max={20}
      required
    />
  );
});
