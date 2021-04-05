import { AdminDashboard, Header } from "containers";
import { useUi } from "hooks";

export const AdminLayout = ({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div className="">
      <AdminDashboard />
      <Header />
      <div
        className={` transition ease-linear duration-200  ${
          open
            ? "w-full lg:transform lg:translate-x-80 lg:w-drawer-open"
            : "w-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
