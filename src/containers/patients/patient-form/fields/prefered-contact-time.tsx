import { Input } from "components";
import { FC, memo } from "react";

export const PreferedContactTime: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Prefered Contact Time"
        name="PreferedContactTime"
        type="date"
        register={register}
        error={error}
        required
      />
    );
  }
);
