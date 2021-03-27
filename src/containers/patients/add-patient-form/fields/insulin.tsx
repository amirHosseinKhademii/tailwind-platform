import { Input } from "components";
import { FC, memo } from "react";

export const Insulin: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Insulin"
      name="Insulin"
      register={register}
      error={error}
      required
    />
  );
});
