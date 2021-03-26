import { Input } from "components";

export const DoNotCallUntil = ({ register, errors }) => {
  return (
    <Input
      label="Do Not Call Until"
      name="DoNotCallUntil"
      type="date"
      register={register}
      error={errors["DoNotCallUntil"]?.message}
      required
    />
  );
};
