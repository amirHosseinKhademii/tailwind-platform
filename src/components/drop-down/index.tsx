import { FC } from "react";
import { useToggle } from "hooks";
import { ICArrowDown, ICExpand } from "icons";

export const DropDown: FC<IDropdown> = ({ className, label, children }) => {
  const { open, toggle } = useToggle();

  return (
    <div className="w-full  flex flex-col">
      <div
        className={`w-full flex justify-between items-center cursor-pointer ${className}`}
        onClick={() => toggle()}
      >
        <span className="text-gray-400 text-lg">{label}</span>
        {open ? (
          <ICArrowDown className="text-gray-400  w-6 h-6" />
        ) : (
          <ICExpand className="text-gray-400  w-4 h-4 mr-1" />
        )}
      </div>
      <div
        className={`w-full  rounded transition-all ease-linear duration-200 pl-4 py-2   ${
          open ? " h-auto min-h-10" : "h-0"
        }`}
      >
        {open && <div className="flex flex-col">{children}</div>}
      </div>
    </div>
  );
};
