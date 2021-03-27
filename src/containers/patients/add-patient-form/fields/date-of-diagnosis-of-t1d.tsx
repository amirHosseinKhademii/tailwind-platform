import { Input } from "components/input";
import { FC, memo } from "react";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        type="date"
        register={register}
        error={error}
        required
      />
    );
  }
);
