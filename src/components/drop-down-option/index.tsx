import { FC, memo } from "react";
import { classNames } from "utils";

export const DropDownOption: FC<IDropdownOption> = memo(
  ({ children, onClick, active }) => {
    return (
      <span
        slot="wrapper"
        className={classNames(
          active
            ? " rounded hover:text-cyan-500 text-teal-500"
            : " text-gray-300",
          "my-2 cursor-pointer hover:animate-pulse px-4"
        )}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);
