import { useToggle } from "hooks";
import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import { SwitchBox } from "./switch-box";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className }) => {
    const { open, toggle } = useToggle(checked);

    return (
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => (
          <div
            className={`grid grid-cols-6 gap-x-6 h-24 overflow-hidden ${className}`}
          >
            <span className="text-gray-800 self-start col-span-3  ">
              {label}
            </span>
            <div className="flex items-center justify-between col-span-3">
              <SwitchBox onChange={onChange} open={open} toggle={toggle} />
            </div>
          </div>
        )}
      />
    );
  }
);
