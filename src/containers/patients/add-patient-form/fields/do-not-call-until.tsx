import { Input } from "components";

export const DoNotCallUntil = ({ register }) => {
  return (
    <Input
      label="Do Not Call Until"
      name="DoNotCallUntil"
      type="date"
      register={register}
    />
  );
};
