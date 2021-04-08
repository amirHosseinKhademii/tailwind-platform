import { Fragment, memo } from "react";
import { useHistory } from "react-router";
import { Button, Table, Text } from "components";
import { ICPlus } from "icons";
import { usePatientList } from "./use-patient-list";

export const PatientList = memo(() => {
  const { data, columns } = usePatientList();
  const { push } = useHistory();

  return (
    <Fragment>
      <div className="flex items-baseline justify-between border-b border-gray-400 w-full pb-4">
        <Text size="header" className="w-full flex flex-col items-start mt-10">
          Patients List
        </Text>
        <Button
          className="w-12 bg-indigo-500 h-9"
          onClick={() => push("/admin/patients/add")}
        >
          <ICPlus className="w-4 h-4 text-white" />
        </Button>
      </div>
      <Table data={data} columns={columns} />
    </Fragment>
  );
});
