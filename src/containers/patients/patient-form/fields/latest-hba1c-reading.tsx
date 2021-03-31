import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReading: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Latest HbA1c Reading"
        name="LatestHbA1cReading"
        type="number"
        register={register}
      />
    );
  }
);
