import { Text } from "components";
import { PatientForm } from "containers";

const AddPatient = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-20 ">
      <Text size="title">Add Patient</Text>
      <PatientForm />
    </div>
  );
};

export default AddPatient;
