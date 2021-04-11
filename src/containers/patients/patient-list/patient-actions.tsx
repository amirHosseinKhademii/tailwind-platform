import { useUi } from "hooks";
import { ICDelete, ICEdit } from "icons";
import { Fragment } from "react";

export const PatientActions = () => {
  const { toggleDialog } = useUi();
  return (
    <Fragment>
      <ICEdit
        className="text-gray-500 w-5 h-5 mr-4 cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-edit" });
        }}
      />
      <ICDelete
        className="text-red-500 w-5 h-5 cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-delete" });
        }}
      />
    </Fragment>
  );
};
