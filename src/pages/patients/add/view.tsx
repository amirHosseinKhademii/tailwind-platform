import { AddPatientForm } from "containers";

const AddPatient = () => {
  return (
    <div className="flex flex-col items-start my-10 px-4 md:px-20">
      <h2 className="text-2xl text-gray-600">Add Patient</h2>
      <AddPatientForm />
    </div>
  );
};

export default AddPatient;
