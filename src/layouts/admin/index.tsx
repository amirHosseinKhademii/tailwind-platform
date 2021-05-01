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
          "w-full trans",
          open
            ? "md:transform md:translate-x-72 md:w-open"
            : "md:transform md:translate-x-20 md:w-close"
        )}
      >
        {children}
      </div>
    </div>
  );
};
