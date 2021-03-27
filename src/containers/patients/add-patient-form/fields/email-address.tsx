import { Input } from "components/input";
import { FC, memo } from "react";

export const EmailAddress: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Email Address"
      name="EmailAddress"
      type="email"
      register={register}
      error={error}
      max={50}
      required
    />
  );
});
