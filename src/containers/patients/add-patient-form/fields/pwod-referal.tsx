import { TextArea } from "components";
import { FC, memo } from "react";

export const PWODReferal: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <TextArea label="PWOD Referral" name="PWODReferral" register={register} />
  );
});
