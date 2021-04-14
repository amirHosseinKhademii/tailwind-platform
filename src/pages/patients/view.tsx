import { PatientModal, PatientList } from "containers";

const Patients = () => {
  return (
    <div className="flex flex-col items-center my-6 px-10 md:px-20 ">
      <PatientList />
      <PatientModal />
    </div>
  );
};

export default Patients;
