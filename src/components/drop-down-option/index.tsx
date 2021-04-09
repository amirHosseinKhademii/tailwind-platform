import { FC, memo } from "react";

export const DropDownOption: FC<IDropdownOption> = memo(
  ({ children, onClick, active }) => {
    return (
      <span
        id="drop-down-option"
        className={` my-2 cursor-pointer  px-4 ${
          active
            ? "text-amber-600  rounded  hover:text-cyan-500"
            : " hover:text-cyan-500 text-gray-300"
        }`}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);
