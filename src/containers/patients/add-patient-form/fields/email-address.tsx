import { Input } from "components/input";

export const EmailAddress = ({ register, errors }) => {
  return (
    <Input
      label="Email Address"
      name="EmailAddress"
      type="email"
      register={register}
      error={errors["EmailAddress"]?.message}
      required
    />
  );
};
