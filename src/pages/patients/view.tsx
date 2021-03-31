import { Modal, Pagination, Text } from "components";
import { AddPatientForm, PatientsList } from "containers";
import { Fragment } from "react";

const Patients = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center my-10 px-4 md:px-20 ">
        <Text size="title">Patinets</Text>
        <PatientsList />
        <Pagination className="my-20" total={7} page={1} />
      </div>
      <Modal size="xl" className="px-10 py-8">
        <AddPatientForm />
      </Modal>
    </Fragment>
  );
};

export default Patients;
