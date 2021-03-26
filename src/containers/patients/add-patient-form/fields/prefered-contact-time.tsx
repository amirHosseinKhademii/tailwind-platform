import { Input } from "components";

export const PreferedContactTime = ({ register, errors }) => {
  return (
    <Input
      label="Prefered Contact Time"
      name="PreferedContactTime"
      type="date"
      register={register}
      error={errors["PreferedContactTime"]?.message}
      required
    />
  );
};
