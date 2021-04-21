import { LinkNav } from "components";
import { useUi } from "hooks";
import { ICClose, ICMenu, ICPerson } from "icons";
import { useHistory } from "react-router";

export const Header = () => {
  const { push } = useHistory();
  const { toggleDrawer, uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <header
      className={` h-18 flex items-center justify-between pr-4 md:pr-10 shadow px-2 bg-blue-gray-900 $${
        open
          ? "w-full md:transform md:translate-x-72 md:w-drawer-open"
          : " w-full md:transform md:translate-x-20 md:w-drawer "
      }`}
    >
      <div className="flex items-center">
        {open ? (
          <ICClose
            id="close"
            onClick={() => toggleDrawer()}
            className="w-10 h-10  cursor-pointer self-center  text-gray-400"
          />
        ) : (
          <ICMenu
            id="menu"
            onClick={() => toggleDrawer()}
            className="w-8 h-8  cursor-pointer self-center ml-4  text-gray-400"
          />
        )}
      </div>

      <LinkNav
        size="small"
        className="text-gray-700"
        onClick={() => push("/login")}
      >
        <ICPerson className="w-8 h-8 text-gray-400" />
      </LinkNav>
    </header>
  );
};
