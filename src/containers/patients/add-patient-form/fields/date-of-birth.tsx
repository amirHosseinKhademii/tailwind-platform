import { Input } from "components";

export const DateOfBirth = ({ register }) => {
  return (
    <Input
      label="Date Of Birth"
      type="date"
      name="DateOfBirth"
      register={register}
    />
  );
};
