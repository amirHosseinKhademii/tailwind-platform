import { Input } from "components";

export const LatestHBA1CReadingDate = ({ register, errors }) => {
  return (
    <Input
      label="Latest HbA1c Reading Date"
      name="LatestHbA1cReadingDate"
      type="date"
      register={register}
      error={errors["LatestHbA1cReadingDate"]?.message}
      required
    />
  );
};
