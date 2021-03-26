import { Input } from "components";

export const ContactDate = ({ register, errors }) => {
  return (
    <Input
      label="Contact Date"
      type="date"
      name="ContactDate"
      register={register}
      error={errors["ContactDate"]?.message}
      required
    />
  );
};
