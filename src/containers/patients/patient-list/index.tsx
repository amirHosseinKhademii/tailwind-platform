import { memo } from "react";
import { Table } from "components";

import { usePatientList } from "./use-patient-list";
import { PatientListToolbar } from "./patient-list-toolbar";

export const PatientList = memo(() => {
  const { data, columns } = usePatientList();

  return (
    <div className="w-full">
      <PatientListToolbar />
      <Table
        data={data}
        columns={columns}
        expandable
        className="w-full my-10"
      />
    </div>
  );
});
