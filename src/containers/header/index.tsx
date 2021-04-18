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
      className={` h-14 flex items-center justify-between pr-4 md:pr-10 shadow pl-4 $${
        open
          ? "w-full md:transform md:translate-x-64 md:w-drawer-open"
          : " w-full md:transform md:translate-x-16 md:w-drawer "
      }`}
    >
      <div className="flex items-center">
        {open ? (
          <ICClose
            id="close"
            onClick={() => toggleDrawer()}
            className="w-8 h-8  cursor-pointer self-center mr-4 md:mr-10 text-gray-700"
          />
        ) : (
          <ICMenu
            id="menu"
            onClick={() => toggleDrawer()}
            className="w-8 h-8  cursor-pointer self-center mr-4 md:mr-10 text-gray-700"
          />
        )}
      </div>

      <LinkNav
        size="small"
        className="text-gray-700"
        onClick={() => push("/login")}
      >
        <ICPerson className="w-8 h-8 text-lime-600" />
      </LinkNav>
    </header>
  );
};
