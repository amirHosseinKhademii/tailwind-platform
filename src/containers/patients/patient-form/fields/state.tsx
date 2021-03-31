import { Input } from "components";
import { FC, memo } from "react";

export const State: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="State"
      name="State"
      register={register}
      error={error}
      max={10}
      required
    />
  );
});
