import { Button, LinkNav } from "components";
import { useUi } from "hooks";
import { ICClose, ICMenu, ICPerson } from "icons";
import { useHistory } from "react-router";
import { classNames } from "utils";

export const Header = () => {
  const { push } = useHistory();
  const { toggleDrawer, uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <header
      className={classNames(
        open
          ? "w-full md:transform md:translate-x-72 md:w-drawer-open"
          : " w-full md:transform md:translate-x-20 md:w-drawer ",
        "h-16 flex items-center justify-between pr-4 md:pr-10 shadow px-2 bg-blue-gray-50"
      )}
    >
      <div className="flex items-center">
        {open ? (
          <Button icon onClick={() => toggleDrawer()}>
            <ICClose
              id="close"
              className="w-10 h-10  cursor-pointer self-center  text-gray-500"
            />
          </Button>
        ) : (
          <Button icon onClick={() => toggleDrawer()}>
            <ICMenu
              id="menu"
              className="w-8 h-8  cursor-pointer self-center ml-4  text-gray-500 "
            />
          </Button>
        )}
      </div>

      <Button icon className="text-gray-700 " onClick={() => push("/login")}>
        <ICPerson className="w-8 h-8 text-gray-500 " />
      </Button>
    </header>
  );
};
