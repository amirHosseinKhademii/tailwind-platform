import { useToggle } from "hooks";
import { FC, memo } from "react";
import { Controller } from "react-hook-form";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className }) => {
    const { open, toggle } = useToggle(checked);

    const SwitchBox: FC<ISwitch> = memo(({ onChange }) => (
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

    return (
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => (
          <div
            className={`grid grid-cols-6 gap-x-4 h-20 overflow-hidden ${className}`}
          >
            <span className="text-gray-800 self-start col-span-3 text-sm ">
              {label}
            </span>
            <div className="flex items-center justify-between col-span-3">
              <SwitchBox onChange={onChange} />
            </div>
          </div>
        )}
      />
    );
  }
);
