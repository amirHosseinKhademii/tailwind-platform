import { Input } from "components";

export const FrequencyOfSGBM = ({ register, errors }) => {
  return (
    <Input
      label="Frequency Of SBGM"
      name="FrequencyOfSBGM"
      register={register}
      error={errors["FrequencyOfSBGM"]?.message}
      required
    />
  );
};
