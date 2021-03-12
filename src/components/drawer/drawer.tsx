import { FC, useState, memo } from "react";
import { ICClose, ICMenu } from "icons";

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  const [isOpen, setisOpen] = useState(open);

  return (
    <div
      className={`fixed top-0 left-0 z-50 bg-gray-700  h-full shadow-2xl transition-all duration-500 ease-in-out flex flex-col ${
        isOpen ? "w-80" : "w-16"
      }`}
    >
      {isOpen ? (
        <ICClose
          onClick={() => setisOpen(!isOpen)}
          className="cursor-pointer focus:outline-none w-14 h-14 self-end text-white my-2 mx-auto transition-all duration-500 ease-in-out"
        />
      ) : (
        <ICMenu
          onClick={() => setisOpen(!isOpen)}
          className="cursor-pointer focus:outline-none w-14 h-14 self-end text-white my-2 mx-auto transition-all duration-500 ease-in-out"
        />
      )}
      {isOpen && children}
    </div>
  );
});
