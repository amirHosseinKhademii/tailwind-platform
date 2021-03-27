import { Input } from "components";
import { FC, memo } from "react";

export const FrequencyOfSGBM: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Frequency Of SBGM"
        name="FrequencyOfSBGM"
        register={register}
        error={error}
        max={50}
        required
      />
    );
  }
);
