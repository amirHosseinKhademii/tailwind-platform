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
      className={` h-14 flex items-center justify-between pr-4 md:pr-10 pl-4 $${
        open
          ? "w-full md:transform md:translate-x-64 md:w-drawer-open"
          : " w-full md:transform md:translate-x-16 md:w-drawer "
      }`}
    >
      <div className="flex items-center">
        <ICMenu
          id="menu"
          onClick={() => toggleDrawer()}
          className="w-8 h-8  cursor-pointer self-center mr-4 md:mr-10 text-gray-700"
        />
      </div>

      <LinkNav size="small" path="/login" className="text-gray-700">
        Sign in
      </LinkNav>
    </header>
  );
};
