import { Input } from "components";

export const Insulin = ({ register, errors }) => {
  return (
    <Input
      label="Insulin"
      name="Insulin"
      register={register}
      error={errors["Insulin"]?.message}
      required
    />
  );
};
