import { Input } from "components";

export const Endocrinologist = ({ register, errors }) => {
  return (
    <Input
      label="Endocrinologist"
      name="Endocrinologist"
      register={register}
      error={errors["Endocrinologist"]?.message}
      required
    />
  );
};
