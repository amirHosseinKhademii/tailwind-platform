import { Input } from "components";

export const NextStep = ({ register, errors }) => {
  return (
    <Input
      label="Next Step"
      name="NextStep"
      register={register}
      error={errors["NextStep"]?.message}
      required
    />
  );
};
