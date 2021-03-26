import { TextArea } from "components";

export const PumpDetail = ({ state, register, errors }) => {
  if (state["DiabetesManagementPump"] === "Looping")
    return (
      <TextArea
        label="Pump Details"
        name="PumpDetails"
        register={register}
        error={errors["PumpDetails"]?.message}
        required
      />
    );
  else return null;
};
