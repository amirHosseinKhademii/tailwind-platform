import { Drawer } from "components/drawer";
import { DropDown, DropDownOption } from "components";
import { useHistory, useLocation } from "react-router-dom";

export const AdminDashboard = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Drawer>
      <div className="px-6 my-10">
        <DropDown label="Patients">
          <DropDownOption
            onClick={() => push("/admin/patients/add")}
            active={pathname === "/admin/patients/add"}
          >
            Add patien
          </DropDownOption>
        </DropDown>
      </div>
    </Drawer>
  );
};
