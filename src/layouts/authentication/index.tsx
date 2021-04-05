import { Header, LinkNav } from "components";
import { AdminDashboard } from "containers";
import { useUi } from "hooks";

export const AuthLayout = ({ children }) => {
  // const { uiState } = useUi();
  // const { open } = uiState.drawer;

  return (
    <div className="w-full">
      {/* <AdminDashboard /> */}
      <Header
      // className={`${
      //   open
      //     ? "w-drawer md:transform md:translate-x-80 md:w-drawer-open"
      //     : "transform translate-x-16 w-drawer"
      // }`}
      >
        <LinkNav size="title">Home</LinkNav>
        {/* <LinkNav size="small" path="/login">
          Sign in
        </LinkNav> */}
      </Header>
      <div className="w-full flex justify-center py-10">{children}</div>
    </div>
  );
};
