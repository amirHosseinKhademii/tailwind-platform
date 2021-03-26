import { TextArea } from "components";

export const PWODReferal = ({ register, errors }) => {
  return (
    <TextArea
      label="PWOD Referral"
      name="PWODReferral"
      register={register}
      error={errors["PWODReferral"]?.message}
      required
    />
  );
};
