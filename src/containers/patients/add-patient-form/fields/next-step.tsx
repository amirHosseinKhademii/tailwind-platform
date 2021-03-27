import { Input } from "components";
import { FC, memo } from "react";

export const NextStep: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Next Step"
      name="NextStep"
      register={register}
      error={error}
      required
    />
  );
});
