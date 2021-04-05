import { FC, memo } from "react";
import { useToggle } from "hooks";
import { ICArrowDown, ICArrowUp } from "icons";

export const DropDown: FC<IDropdown> = memo(
  ({ className, label, children, active = false }) => {
    const { open, toggle } = useToggle(active);

    return (
      <div className="w-full  flex flex-col " id="drop-down">
        <button
          className={`w-full flex justify-between items-center cursor-pointer text-white hover:text-indigo-500 focus:outline-none ${className}`}
          onClick={() => toggle()}
          id="button"
        >
          <span className=" text-lg">{label}</span>
          {open ? (
            <ICArrowUp className="w-5 h-5" id="arrow-up" />
          ) : (
            <ICArrowDown className=" w-5 h-5 " id="arrow-down" />
          )}
        </button>
        <div
          className={`w-full  rounded transition-all ease-linear duration-200 pl-1 py-2   ${
            open ? " h-auto min-h-10" : "h-0"
          }`}
        >
          {open && <div className="flex flex-col">{children}</div>}
        </div>
      </div>
    );
  }
);
