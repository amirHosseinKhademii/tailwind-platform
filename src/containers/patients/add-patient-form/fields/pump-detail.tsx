import { TextArea } from "components";

export const PumpDetail = ({ state, register }) => {
  if (state["DiabetesManagementPump"] === "Looping")
    return (
      <TextArea label="Pump Details" name="PumpDetails" register={register} />
    );
  else return null;
};
