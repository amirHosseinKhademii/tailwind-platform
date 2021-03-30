import { Pagination, Text } from "components";
import { PatientsList } from "containers";

const Patients = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-20 ">
      <Text size="title">Patinets</Text>
      <PatientsList />
      <Pagination className="my-20" />
    </div>
  );
};

export default Patients;
