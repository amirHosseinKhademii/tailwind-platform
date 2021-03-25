import { Drawer } from "components/drawer";
import { DropDown, DropDownOption } from "components";
import { useHistory, useLocation } from "react-router-dom";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Drawer>
      <div className="px-6 my-10">
        <DropDown label="Patients" active={pathname.includes("patients")}>
          <DropDownOption
            onClick={() => push("/admin/patients/add")}
            active={pathname === "/admin/patients/add"}
          >
            Add Patient
          </DropDownOption>
          <DropDownOption
            onClick={() => push("/admin/patients/list")}
            active={pathname === "/admin/patients/list"}
          >
            Patients List
          </DropDownOption>
        </DropDown>
      </div>
    </Drawer>
  );
};