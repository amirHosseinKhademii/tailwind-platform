import { FC } from "react";

export const DropDownOption: FC<IDropdownOption> = ({
  children,
  onClick,
  active,
}) => {
  return (
    <span
      className={` my-2 cursor-pointer  p-4 ${
        active
          ? "bg-indigo-500  rounded  hover:bg-indigo-600 text-gray-300"
          : " hover:text-indigo-500 text-gray-400"
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
