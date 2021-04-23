import { FC, memo } from "react";

export const SwitchBox: FC<ISwitch> = memo(({ onChange, toggle, open }) => (
  <div slot="wrapper">
    <div
      slot="toggle-wrapper"
      className={`w-14 h-8 rounded-full  border border-indigo-300 flex flex-row items-center cursor-pointer px-1  ${
        open ? "bg-indigo-300 justify-end" : "bg-gray-200 justify-start"
      }`}
      onClick={() => {
        onChange(!open);
        toggle();
      }}
    >
      <div
        slot="toggle"
        className={`w-6 h-6 rounded-full  ${
          open ? "bg-indigo-500" : "bg-gray-500"
        }`}
      />
    </div>
  </div>
));
