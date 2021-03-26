import { Input } from "components";

export const State = ({ register, errors }) => {
  return (
    <Input
      label="State"
      name="State"
      register={register}
      error={errors["State"]?.message}
      required
    />
  );
};
