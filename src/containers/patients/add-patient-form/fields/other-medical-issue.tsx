import { TextArea } from "components";

export const OtherMedicalIssue = ({ register, errors }) => {
  return (
    <TextArea
      label="Other Medical Issue"
      name="OtherMedicalIssue"
      register={register}
      error={errors["OtherMedicalIssue"]?.message}
      required
    />
  );
};
