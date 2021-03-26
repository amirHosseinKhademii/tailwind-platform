import { TextArea } from "components";

export const AvailabilityDetail = ({ register, errors }) => {
  return (
    <TextArea
      label="Availability Detail"
      name="AvailabilityDetail"
      register={register}
      error={errors["AvailabilityDetail"]?.message}
      required
    />
  );
};
