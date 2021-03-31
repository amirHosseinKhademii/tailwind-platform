import { Input } from "components";
import { FC, memo } from "react";

export const DateOfBirth: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Date Of Birth"
      type="date"
      name="DateOfBirth"
      register={register}
      error={error}
      required
    />
  );
});
