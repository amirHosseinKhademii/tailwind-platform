import { Input } from "components";

export const PhoneNumber = ({ register, errors }) => {
  return (
    <Input
      label="Phone Number (Mobile)"
      name="PhoneNumber"
      type="number"
      register={register}
      error={errors["PhoneNumber"]?.message}
      required
    />
  );
};
