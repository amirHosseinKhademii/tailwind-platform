import { Input } from "components";

export const Surname = ({ register, errors }) => {
  return (
    <Input
      label="Surname"
      name="Surname"
      register={register}
      error={errors["Surname"]?.message}
      required
    />
  );
};
