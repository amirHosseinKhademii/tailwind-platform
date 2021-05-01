import { useHistory, useLocation } from "react-router-dom";
import { Drawer } from "components";
import { ICPeoples } from "icons";
import { useUi } from "hooks";
import { classNames } from "utils";

import { PatientDropDown } from "./patient-drop-down";
import Logo from "assets/images/logo.jpg";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <Drawer open={open}>
      <div className="w-full row-center my-2 ">
        <img
          className="w-14 h-14 cursor-pointer"
          src={Logo}
          alt="Logo"
          onClick={() => push("/")}
        />
      </div>

      {open ? (
        <div className="">
          <PatientDropDown pathname={pathname} push={push} />
        </div>
      ) : (
        <div className="col-center mt-4">
          <ICPeoples
            className={classNames(
              "w-7 h-7 cursor-pointer hover:animate-bounce",
              pathname.includes("patients") ? "text-teal-400" : "text-gray-400"
            )}
            onClick={() => push("/admin/patients")}
          />
        </div>
      )}
    </Drawer>
  );
};
