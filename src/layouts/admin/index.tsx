import { AdminDashboard, Header } from "containers";
import { useUi } from "hooks";
import { classNames } from "utils";

export const AdminLayout = ({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div className=" bg-blue-gray-100 fixed inset-0 overflow-y-auto overflow-x-hidden">
      <AdminDashboard />
      <Header />
      <div
        className={classNames(
          open
            ? "w-full md:transform md:translate-x-64 md:w-drawer-open"
            : "w-full md:transform md:translate-x-16 md:w-drawer",
          "transition ease-linear duration-200"
        )}
      >
        {children}
      </div>
    </div>
  );
};
