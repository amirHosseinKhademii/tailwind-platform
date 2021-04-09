import { Fragment, memo } from "react";
import { useHistory } from "react-router";
import { Button, Input, Table, Text } from "components";
import { ICPlus } from "icons";
import { usePatientList } from "./use-patient-list";

export const PatientList = memo(() => {
  const { data, columns } = usePatientList();
  const { push } = useHistory();

  return (
    <Fragment>
      <div className="flex items-baseline justify-between border-b border-gray-400 w-full pb-4">
        <Text size="header" className="w-1/3 flex flex-col items-start mt-10">
          Patients List
        </Text>
        <div className="flex items-center w-2/3 lg:w-1/2">
          <Input className="mr-4" placeholder="Search content here ..." />
          <Button
            className="w-14 bg-indigo-800 h-12"
            onClick={() => push("/admin/patients/add")}
          >
            <ICPlus className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
      <div className=" w-full my-10">
        <Table data={data} columns={columns} />
      </div>
    </Fragment>
  );
});
