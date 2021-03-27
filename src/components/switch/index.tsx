import { useToggle } from "hooks";
import { FC, memo } from "react";
import { Controller } from "react-hook-form";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className, error }) => {
    const { open, toggle } = useToggle(checked);

    const SwitchBox: FC<ISwitch> = memo(({ onChange }) => (
      <div className="flex flex-row self-start items-center mt-2">
        <div
          className={`w-14 h-8 rounded-full  border flex flex-row items-center justify-between  cursor-pointer px-1 ${
            error ? "border-red-400 shadow" : "border-gray-400"
          } ${open ? "bg-indigo-300" : error ? "bg-red-300" : "bg-gray-300"}`}
          onClick={() => {
            onChange(!open);
            toggle();
          }}
        >
          {open ? (
            <div />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-500 " />
          )}
          {open ? (
            <div className="w-6 h-6 rounded-full bg-indigo-500" />
          ) : (
            <div />
          )}
        </div>
      </div>
    ));

    return (
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => (
          <div className={`grid grid-cols-6 h-20 overflow-hidden ${className}`}>
            <span className="text-gray-800 self-start col-span-4">{label}</span>
            <div className="flex items-center justify-between col-span-2">
              {error && typeof error === "string" ? (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              ) : (
                <div />
              )}
              <SwitchBox onChange={onChange} />
            </div>
          </div>
        )}
      />
    );
  }
);
