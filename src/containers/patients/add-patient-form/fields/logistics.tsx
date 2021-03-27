import { Input } from "components";
import { FC, memo } from "react";

export const Logistics: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Logistics"
      name="Logistics"
      register={register}
      error={error}
      required
    />
  );
});
