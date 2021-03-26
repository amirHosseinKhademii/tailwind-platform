import { Input } from "components";

export const LatestHBA1CReading = ({ register, errors }) => {
  return (
    <Input
      label="Latest HbA1c Reading"
      name="LatestHbA1cReading"
      type="number"
      register={register}
      error={errors["LatestHbA1cReading"]?.message}
      required
    />
  );
};
