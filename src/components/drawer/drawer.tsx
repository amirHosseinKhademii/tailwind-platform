import { FC } from "react";
import { ICMenu, ICBack } from "icons";
import { useDrawer } from "./use-drawer";

export const Drawer: FC<IDrawer> = ({ children }) => {
  const { open, toggle } = useDrawer(true);

  return (
    <div
      id="drawer"
      className={`fixed top-0 left-0 h-full flex flex-col pt-4  shadow-2xl bg-gray-800 transition-all ease-linear duration-300 ${
        open ? "w-80" : "w-16 "
      }`}
    >
      {open ? (
        <ICBack
          id="close"
          onClick={() => toggle()}
          className="w-10 h-10 text-white cursor-pointer self-end mr-4  "
        />
      ) : (
        <ICMenu
          id="menu"
          onClick={() => toggle()}
          className="w-10 h-10 text-white cursor-pointer self-center"
        />
      )}
      {children}
    </div>
  );
};
