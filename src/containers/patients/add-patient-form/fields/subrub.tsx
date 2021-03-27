import { Input } from "components";
import { FC, memo } from "react";

export const Subrub: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Subrub"
      name="Subrub"
      register={register}
      error={error}
      required
    />
  );
});
