import { Input } from "components";
import { FC, memo } from "react";

export const PhoneNumber: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Phone Number (Mobile)"
      name="PhoneNumber"
      type="number"
      register={register}
      error={error}
      max={20}
      required
    />
  );
});
