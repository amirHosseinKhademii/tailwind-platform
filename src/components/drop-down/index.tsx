import { FC } from "react";
import { useToggle } from "hooks";
import { ICArrowDown, ICArrowUp, ICExpand } from "icons";

export const DropDown: FC<IDropdown> = ({
  className,
  label,
  children,
  active = false,
}) => {
  const { open, toggle } = useToggle(active);

  return (
    <div className="w-full  flex flex-col">
      <div
        className={`w-full flex justify-between items-center cursor-pointer text-gray-400 hover:text-indigo-500 ${className}`}
        onClick={() => toggle()}
      >
        <span className=" text-lg">{label}</span>
        {open ? (
          <ICArrowUp className="w-5 h-5" />
        ) : (
          <ICArrowDown className=" w-5 h-5 " />
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
