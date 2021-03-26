import { Input } from "components";

export const Subrub = ({ register, errors }) => {
  return (
    <Input
      label="Subrub"
      name="Subrub"
      register={register}
      error={errors["Subrub"]?.message}
      required
    />
  );
};
