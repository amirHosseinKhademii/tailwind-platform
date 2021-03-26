import { Input } from "components";

export const DateDetailsUpdated = ({ register, errors }) => {
  return (
    <Input
      label="Date Details Updated"
      name="DateDetailsUpdated"
      type="date"
      register={register}
      error={errors["DateDetailsUpdated"]?.message}
      required
    />
  );
};
