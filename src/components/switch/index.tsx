import { useToggle } from "hooks";
import { FC } from "react";
import { Controller } from "react-hook-form";

export const Switch: FC<ISwitch> = ({
  label,
  checked,
  control,
  name,
  className,
}) => {
  const { open, toggle } = useToggle(checked);

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange }) => (
        <div className={`w-full flex flex-col justify-between ${className}`}>
          <span className="text-gray-800 self-start">{label}</span>
          <div className="flex flex-row self-end items-center">
            <span className="text-gray-600">No</span>
            <div
              className="w-18 h-10 rounded-full bg-white border border-gray-400 mx-4 flex items-center justify-between  cursor-pointer px-0.5"
              onClick={() => {
                onChange(!open);
                toggle();
              }}
            >
              {open ? (
                <div />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-500 " />
              )}
              {open ? (
                <div className="w-9 h-9 rounded-full bg-indigo-500" />
              ) : (
                <div />
              )}
            </div>
            <span className="text-gray-600">Yes</span>
          </div>
        </div>
      )}
    />
  );
};
