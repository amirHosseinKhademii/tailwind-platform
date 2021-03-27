import { TextArea } from "components";
import { FC } from "react";

export const StudyForConsideration: FC<IPatientField> = ({
  register,
  error,
}) => {
  return (
    <TextArea
      label="Study For Consideration"
      name="StudyForConsideration"
      register={register}
      error={error}
      required
    />
  );
};
