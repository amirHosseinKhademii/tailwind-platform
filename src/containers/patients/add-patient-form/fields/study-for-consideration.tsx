import { TextArea } from "components";

export const StudyForConsideration = ({ register, errors }) => {
  return (
    <TextArea
      label="Study For Consideration"
      name="StudyForConsideration"
      register={register}
      error={errors["StudyForConsideration"]?.message}
      required
    />
  );
};
