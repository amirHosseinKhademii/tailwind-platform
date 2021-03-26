import { TextArea } from "components";

export const ExerciseDetail = ({ register, errors }) => {
  return (
    <TextArea
      label="Exercise Detail"
      name="ExerciseDetail"
      register={register}
      error={errors["ExerciseDetail"]?.message}
      required
    />
  );
};
