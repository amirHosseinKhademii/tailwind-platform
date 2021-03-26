import { Input } from "components";

export const DateDetailsUpdated = ({ register }) => {
  return (
    <Input
      label="Date Details Updated"
      name="DateDetailsUpdated"
      type="date"
      register={register}
    />
  );
};
