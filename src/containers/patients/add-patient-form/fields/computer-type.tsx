import { Input } from "components/input";

export const ComputerType = ({ register, errors }) => {
  return (
    <Input
      label="Computer Type"
      name="ComputerType"
      register={register}
      error={errors["ComputerType"]?.message}
      required
    />
  );
};
