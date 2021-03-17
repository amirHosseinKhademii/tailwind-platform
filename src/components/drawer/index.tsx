import { FC } from "react";
import { ICMenu, ICArrowLeft } from "icons";
import { useToggle } from "hooks";

export const Drawer: FC<IDrawer> = ({ children }) => {
  const { open, toggle } = useToggle(true);

  return (
    <div
      id="drawer"
      className={`fixed top-0 left-0 h-full flex flex-col pt-4  shadow-2xl bg-gray-800 transition-all ease-linear duration-300 ${
        open ? "w-80" : "w-16 "
      }`}
    >
      {open ? (
        <ICArrowLeft
          id="close"
          onClick={() => toggle()}
          className="w-8 h-8 text-gray-600 cursor-pointer self-end mr-4  "
        />
      ) : (
        <ICMenu
          id="menu"
          onClick={() => toggle()}
          className="w-10 h-10 text-white cursor-pointer self-center"
        />
      )}
      {open && children}
    </div>
  );
};
