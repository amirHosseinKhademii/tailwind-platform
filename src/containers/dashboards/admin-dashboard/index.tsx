import { useHistory, useLocation } from "react-router-dom";
import { Button, Drawer } from "components";
import { ICPeoples, ICPerson } from "icons";
import { useUi } from "hooks";
import { classNames } from "utils";

import { PatientDropDown } from "./patient-drop-down";
import Logo from "assets/images/logo.jpg";
import { AuthDropDown } from "./auth-drop-down";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <Drawer open={open}>
      <div className="w-full row-center mt-2 mb-6 ">
        <img
          className="w-14 h-14 cursor-pointer"
          src={Logo}
          alt="Logo"
          onClick={() => push("/")}
        />
      </div>

      {open ? (
        <div className="">
          <AuthDropDown pathname={pathname} push={push} />
          <PatientDropDown pathname={pathname} push={push} />
        </div>
      ) : (
        <div className="col-center mt-10">
          <Button icon onClick={() => push("/authentication/login")}>
            <ICPerson
              className={classNames(
                "w-6 h-6  mb-4",
                pathname.includes("authentication")
                  ? "text-cyan-700"
                  : "text-gray-400"
              )}
            />
          </Button>
          <Button icon onClick={() => push("/admin/patients")}>
            <ICPeoples
              className={classNames(
                "w-6 h-6 ",
                pathname.includes("patients")
                  ? "text-cyan-700"
                  : "text-gray-400"
              )}
            />
          </Button>
        </div>
      )}
    </Drawer>
  );
};
