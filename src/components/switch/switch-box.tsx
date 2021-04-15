import { FC, memo } from "react";

export const SwitchBox: FC<ISwitch> = memo(({ onChange, toggle, open }) => (
  <div className="flex flex-row self-start items-center mt-2">
    <div
      className={`w-14 h-8 rounded-full  border flex flex-row items-center cursor-pointer px-1  ${
        open ? "bg-indigo-300 justify-end" : "bg-gray-300 justify-start"
      }`}
      onClick={() => {
        onChange(!open);
        toggle();
      }}
    >
      <div
        className={`w-6 h-6 rounded-full  ${
          open ? "bg-indigo-500" : "bg-gray-500"
        }`}
      />
    </div>
  </div>
));
