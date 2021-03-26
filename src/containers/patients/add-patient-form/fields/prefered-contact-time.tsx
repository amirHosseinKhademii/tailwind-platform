import { Input } from "components";

export const PreferedContactTime = ({ register }) => {
  return (
    <Input
      label="Prefered Contact Time"
      name="PreferedContactTime"
      type="date"
      register={register}
    />
  );
};
