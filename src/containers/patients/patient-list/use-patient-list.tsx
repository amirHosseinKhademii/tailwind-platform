import { useMemo, Fragment } from "react";
import { ICEdit, ICDelete } from "icons";
import { useUi } from "hooks";

const data = [
  {
    name: "Amir hossein",
    lastName: "Khademi",
    birthDay: "1990-04-05",
    id: "1",
  },
  { name: "Ali", lastName: "Khademi", birthDay: "1990-04-05", id: "2" },
];
export const usePatientList = () => {
  const { toggleDialog } = useUi();

  const columns = useMemo(
    () => [
      { head: "Name", key: "name", width: "w-1/3", check: true },
      { head: "Last Name", key: "lastName", width: "w-1/3" },
      { head: "Birth Date", key: "birthDay", width: "w-1/3" },
      {
        head: "Actions",
        width: "w-1/8",
        render: () => (
          <Fragment>
            <ICEdit
              className="text-gray-600 w-5 h-5 mr-4 cursor-pointer"
              onClick={() => toggleDialog({ open: true, type: "patient-edit" })}
            />
            <ICDelete
              className="text-red-500 w-5 h-5 cursor-pointer"
              onClick={() =>
                toggleDialog({ open: true, type: "patient-delete" })
              }
            />
          </Fragment>
        ),
      },
    ],
    []
  );
  return { columns, data };
};
