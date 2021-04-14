import { Input } from "components";
import { FC, memo } from "react";

export const PreferedContactDate: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Prefered Contact Date"
        name="PreferedContactDate"
        type="text"
        register={register}
        error={error}
        required
      />
    );
  }
);
