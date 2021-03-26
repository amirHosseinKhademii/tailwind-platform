import { FC, memo } from "react";

export const DropDownOption: FC<IDropdownOption> = memo(
  ({ children, onClick, active }) => {
    return (
      <span
        className={` my-2 cursor-pointer  px-4 ${
          active
            ? "text-indigo-500  rounded  hover:text-indigo-700"
            : " hover:text-indigo-700 text-gray-400"
        }`}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);
