import { FC, memo } from "react";
import { classNames } from "utils";

export const SwitchBox: FC<ISwitch> = memo(({ onChange, toggle, open }) => (
  <div slot="wrapper">
    <div
      slot="toggle-wrapper"
      className={classNames(
        "flex items-center w-14 h-8 px-1 rounded-full border cursor-pointer border-indigo-300",
        open ? "bg-indigo-300 justify-end" : "bg-gray-200 justify-start"
      )}
      onClick={() => {
        onChange(!open);
        toggle();
      }}
    >
      <div
        slot="toggle"
        className={classNames(
          "w-6 h-6 rounded-full ",
          open ? "bg-indigo-500" : "bg-gray-500"
        )}
      />
    </div>
  </div>
));
