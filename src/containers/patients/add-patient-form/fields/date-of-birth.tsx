import { Input } from "components";

export const DateOfBirth = ({ register, errors }) => {
  return (
    <Input
      label="Date Of Birth"
      type="date"
      name="DateOfBirth"
      register={register}
      error={errors["DateOfBirth"]?.message}
      required
    />
  );
};
