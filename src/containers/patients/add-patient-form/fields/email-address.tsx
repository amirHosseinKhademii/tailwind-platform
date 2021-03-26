import { Input } from "components/input";

export const EmailAddress = ({ register }) => {
  return (
    <Input
      label="Email Address"
      name="EmailAddress"
      type="email"
      register={register}
    />
  );
};
