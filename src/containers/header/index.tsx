import { LinkNav } from "components";
import { useUi } from "hooks";
import { ICMenu } from "icons";
import { useLocation } from "react-router";

export const Header = () => {
  const { pathname } = useLocation();
  const { toggleDrawer, uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <header
      className={` h-14 bg-gray-800 flex items-center justify-between pr-4 md:pr-10 $${
        open && !pathname.includes("login")
          ? "w-full lg:transform lg:translate-x-80 lg:w-drawer-open pl-4 md:pl-10"
          : "w-full pl-2"
      }`}
    >
      <div className="flex items-center">
        {open
          ? null
          : !pathname.includes("login") && (
              <ICMenu
                id="menu"
                onClick={() => toggleDrawer()}
                className="w-8 h-8 text-white cursor-pointer self-center mr-4 md:mr-10"
              />
            )}
        <LinkNav size="title" path="/">
          Home
        </LinkNav>
      </div>
      {pathname.includes("login") ? (
        <LinkNav size="small" path="/admin/patients">
          Patients
        </LinkNav>
      ) : (
        <LinkNav size="small" path="/login">
          Sign in
        </LinkNav>
      )}
    </header>
  );
};
