import { FC, memo } from "react";
import { ICMenu, ICClose } from "icons";
import { useUi } from "hooks";

export const Drawer: FC<IDrawer> = memo(({ children }) => {
  const { uiState, toggleDrawer } = useUi();
  const { open } = uiState.drawer;

  return (
    <div
      className={`fixed top-0 left-0 h-full flex  flex-col pt-4  shadow-2xl bg-gray-800 transition ease-linear duration-400  z-30  ${
        open ? "w-52 md:w-80" : "w-16 "
      }`}
    >
      {open ? (
        <ICClose
          id="close"
          onClick={() => toggleDrawer()}
          className="w-6 h-6 text-gray-400 cursor-pointer self-end mr-4  "
        />
      ) : (
        <ICMenu
          id="menu"
          onClick={() => toggleDrawer()}
          className="w-10 h-10 text-white cursor-pointer self-center"
        />
      )}
      {open && <div>{children}</div>}
    </div>
  );
});
