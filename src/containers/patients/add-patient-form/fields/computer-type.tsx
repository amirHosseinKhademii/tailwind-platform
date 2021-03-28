import { Input } from "components/input";
import { FC, memo } from "react";

export const ComputerType: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Computer Type"
      name="ComputerType"
      register={register}
      error={error}
    />
  );
});
