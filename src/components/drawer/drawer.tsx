import { FC } from "react";
import { ICMenu, ICClose } from "icons";
import { useDrawer } from "./use-drawer";

export const Drawer: FC<IDrawer> = ({ children }) => {
  const { open, toggle } = useDrawer();

  return (
    <div
      id="drawer"
      className={`fixed top-0 left-0 h-full flex flex-col items-center shadow-2xl bg-indigo-900 transition-all ease-linear duration-300 ${
        open ? "w-80" : "w-16"
      }`}
    >
      {open ? (
        <ICClose
          id="close"
          onClick={() => toggle()}
          className="w-14 h-14 text-white cursor-pointer"
        />
      ) : (
        <ICMenu
          id="menu"
          onClick={() => toggle()}
          className="w-14 h-14 text-white cursor-pointer"
        />
      )}
      {children}
    </div>
  );
};
