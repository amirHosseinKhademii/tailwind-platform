import { FC, useState } from "react";
import { ICClose, ICMenu } from "icons";

export const Drawer: FC<{ children?: any }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-50 bg-gray-700  h-full shadow-2xl transition-all duration-500 ease-in-out flex flex-col ${
        open ? "w-80" : "w-16"
      }`}
    >
      {open ? (
        <ICClose
          onClick={() => setOpen(!open)}
          className="cursor-pointer focus:outline-none w-14 h-14 self-end text-white my-2 mx-auto transition-all duration-500 ease-in-out"
        />
      ) : (
        <ICMenu
          onClick={() => setOpen(!open)}
          className="cursor-pointer focus:outline-none w-14 h-14 self-end text-white my-2 mx-auto transition-all duration-500 ease-in-out"
        />
      )}

      {children}
    </div>
  );
};
