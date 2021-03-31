import { TextArea } from "components";
import { FC, memo } from "react";

export const AvailabilityDetail: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <TextArea
        label="Availability Detail"
        name="AvailabilityDetail"
        register={register}
        error={error}
        max={2000}
      />
    );
  }
);
