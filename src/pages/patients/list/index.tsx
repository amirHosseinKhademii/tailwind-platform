import { Fragment } from "react";
import { PatientModal, PatientList } from "containers";

const Patients = () => {
  return (
    <Fragment>
      <PatientList />
      <PatientModal />
    </Fragment>
  );
};

export default Patients;
