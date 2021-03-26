import { Input } from "components";

export const ChristianName = ({ register, errors }) => {
  return (
    <Input
      label="Christian Name"
      name="ChristianName"
      register={register}
      error={errors["ChristianName"]?.message}
      required
    />
  );
};
