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
            ? "w-full md:transform md:translate-x-64 md:w-drawer-open"
            : "w-full md:transform md:translate-x-16 md:w-drawer"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
