import { FC } from "react";

export const DropDownOption: FC<IDropdownOption> = ({ children, onClick }) => {
  return (
    <span className="text-gray-500 my-2 cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
