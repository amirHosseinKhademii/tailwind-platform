import { Input } from "components";

export const LatestHBA1CReadingDate = ({ register }) => {
  return (
    <Input
      label="Latest HbA1c Reading Date"
      name="LatestHbA1cReadingDate"
      type="date"
      register={register}
    />
  );
};
