import { Input } from "components";

export const PhoneNumber = ({ register }) => {
  return (
    <Input
      label="Phone Number (Mobile)"
      name="PhoneNumber"
      type="number"
      register={register}
    />
  );
};
