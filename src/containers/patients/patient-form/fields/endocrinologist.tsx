import { Input } from "components";
import { FC, memo } from "react";

export const Endocrinologist: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Endocrinologist"
        name="Endocrinologist"
        register={register}
        error={error}
        max={50}
      />
    );
  }
);
