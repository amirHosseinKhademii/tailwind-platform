import { Header, LinkNav } from "components";
import { AdminDashboard } from "containers";
import { useUi } from "hooks";

export const AdminLayout = ({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div className="">
      <AdminDashboard />
      <Header
        className={`${
          open
            ? "w-drawer md:transform md:translate-x-80 md:w-drawer-open"
            : "transform translate-x-16 w-drawer"
        }`}
      >
        <LinkNav size="title">Home</LinkNav>
        <LinkNav size="small" path="/login">
          Sign in
        </LinkNav>
      </Header>
      <div
        className={` transition ease-linear duration-300  ${
          open
            ? "w-drawer md:transform md:translate-x-80 md:w-drawer-open"
            : "transform translate-x-16 w-drawer"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
