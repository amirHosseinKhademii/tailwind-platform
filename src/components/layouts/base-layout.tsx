import { Drawer } from "components/drawer";

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Drawer />
      {children}
    </div>
  );
};
