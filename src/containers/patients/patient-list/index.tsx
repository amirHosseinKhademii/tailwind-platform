import { Fragment, memo } from "react";
import { useHistory } from "react-router";
import { Button, Input, Table, Text } from "components";
import { ICPlus, ICSearch } from "icons";
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
          <Input
            className="mr-4"
            placeholder="Search content here ..."
            icon={() => <ICSearch className="w-5 h-5 text-gray-400 " />}
          />
          <Button onClick={() => push("/admin/patients/add")} icon>
            <ICPlus className="w-8 h-8 text-cyan-600" />
          </Button>
        </div>
      </div>
      <div className=" w-full my-10">
        <Table data={data} columns={columns} expandable />
      </div>
    </Fragment>
  );
});
