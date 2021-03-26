import { Input } from "components";

export const ContactDate = ({ register }) => {
  return (
    <Input
      label="Contact Date"
      type="date"
      name="ContactDate"
      register={register}
    />
  );
};
