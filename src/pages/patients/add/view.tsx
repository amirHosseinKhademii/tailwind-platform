import { Text } from "components";
import { PatientForm } from "containers";

const AddPatient = () => {
  return (
    <div className="flex flex-col items-center my-10 px-10  md:px-20 ">
      <PatientForm />
    </div>
  );
};

export default AddPatient;
