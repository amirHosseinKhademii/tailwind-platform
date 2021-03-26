import { Input } from "components";

export const DiabetesEducator = ({ register, errors }) => {
  return (
    <Input
      label="Diabetes Educator"
      name="DiabetesEducator"
      register={register}
      error={errors["DiabetesEducator"]?.message}
      required
    />
  );
};
