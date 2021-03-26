import { Input } from "components";

export const Logistics = ({ register, errors }) => {
  return (
    <Input
      label="Logistics"
      name="Logistics"
      register={register}
      error={errors["Logistics"]?.message}
      required
    />
  );
};
