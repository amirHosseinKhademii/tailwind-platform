import { TextArea } from "components";
import { FC, memo } from "react";

export const OtherMedicalIssue: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <TextArea
        label="Other Medical Issue"
        name="OtherMedicalIssue"
        register={register}
        error={error}
        required
      />
    );
  }
);
