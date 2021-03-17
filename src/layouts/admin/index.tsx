import { AdminDashboard } from "containers";
import { useUi } from "hooks";

export const AdminLayout = ({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div>
      <AdminDashboard />
      <div
        className={` transition-all ease-linear duration-300  ${
          open
            ? "transform translate-x-80 w-drawer-open"
            : "transform translate-x-16 w-drawer"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
