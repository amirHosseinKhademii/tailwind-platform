import { Drawer } from "components/drawer";
import { DropDown, DropDownOption } from "components";

export const Dashboard = () => {
  return (
    <Drawer>
      <div className="px-6 my-10">
        <DropDown label="Patients">
          <DropDownOption> Add pation</DropDownOption>
        </DropDown>
      </div>
    </Drawer>
  );
};
