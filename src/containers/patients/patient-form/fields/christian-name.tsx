import { Input } from "components";
import { FC, memo } from "react";

export const ChristianName: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Christian Name"
      name="ChristianName"
      register={register}
      error={error}
      required
      max={50}
    />
  );
});
