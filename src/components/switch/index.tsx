import { useToggle } from "hooks";
import { FC, memo } from "react";
import { Controller } from "react-hook-form";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className, error }) => {
    const { open, toggle } = useToggle(checked);

    const SwitchBox: FC<ISwitch> = memo(({ onChange }) => (
      <div className="flex flex-row self-end items-center mt-2">
        <span className="text-gray-600">No</span>
        <div
          className={`w-14 h-8 rounded-full  border  mx-4 flex items-center justify-between  cursor-pointer px-0.5 ${
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
            <div className="w-7 h-7 rounded-full bg-gray-500 " />
          )}
          {open ? (
            <div className="w-7 h-7 rounded-full bg-indigo-500" />
          ) : (
            <div />
          )}
        </div>
        <span className="text-gray-600">Yes</span>
      </div>
    ));

    return (
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => (
          <div
            className={`w-full flex flex-col justify-between max-h-18 ${className}`}
          >
            <span className="text-gray-800 self-start">{label}</span>
            <div className="flex items-center justify-between">
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
