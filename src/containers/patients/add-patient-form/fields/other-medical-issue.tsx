import { TextArea } from "components";

export const OtherMedicalIssue = ({ register }) => {
  return (
    <TextArea
      label="Other Medical Issue"
      name="OtherMedicalIssue"
      register={register}
    />
  );
};
