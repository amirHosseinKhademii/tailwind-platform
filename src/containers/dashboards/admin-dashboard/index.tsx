import { Drawer } from "components/drawer";
import { DropDown, DropDownOption } from "components";
import { useHistory, useLocation } from "react-router-dom";
import { ICPeoples } from "icons";
import { useUi } from "hooks";
import { Fragment } from "react";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <Drawer>
      <p className="text-white text-xl bg-indigo-900 h-14 flex items-center justify-center">
        DTRG
      </p>
      {open ? (
        <Fragment>
          <DropDown
            label="Patients"
            active={pathname.includes("patients")}
            icon={() => <ICPeoples className="w-6 h-6 mx-2 text-gray-400  " />}
          >
            <DropDownOption
              onClick={() => push("/admin/patients")}
              active={pathname === "/admin/patients"}
            >
              Patients
            </DropDownOption>
            <DropDownOption
              onClick={() => push("/admin/patients/add")}
              active={pathname === "/admin/patients/add"}
            >
              Add a new patient
            </DropDownOption>
          </DropDown>
        </Fragment>
      ) : (
        <div className=" flex flex-col items-center">
          <ICPeoples className="w-6 h-6 mt-4  text-gray-400 " />
        </div>
      )}
    </Drawer>
  );
};
