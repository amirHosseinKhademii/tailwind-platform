import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Drawer } from "components";
import { ICPeoples } from "icons";
import { useUi } from "hooks";
import { PatientDropDown } from "./patient-drop-down";
import Logo from "assets/images/logo.jpg";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <Drawer open={open}>
      <div className="w-full flex items-center justify-center">
        <img className="w-16 h-14" src={Logo} alt="Logo" />
      </div>

      {open ? (
        <Fragment>
          <PatientDropDown pathname={pathname} push={push} />
        </Fragment>
      ) : (
        <div className=" flex flex-col items-center">
          <ICPeoples
            className="w-6 h-6 mt-4  text-gray-400 cursor-pointer"
            onClick={() => push("/admin/patients")}
          />
        </div>
      )}
    </Drawer>
  );
};
