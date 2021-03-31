import { Text } from "components";
import { PatientModal, PatientList } from "containers";

const Patients = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-20 ">
      <Text size="title">Patinets</Text>
      <PatientList />
      <PatientModal />
    </div>
  );
};

export default Patients;
