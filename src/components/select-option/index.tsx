import { FC, memo } from "react";
import { Check } from "components";
import { useSelectOption } from "./use-select-option";

export const SelectOption: FC<ISelectOption> = memo(
  ({
    children,
    onChange,
    value,
    toggle,
    key,
    selected,
    multiple = false,
    state = [],
    disabled,
    onClick,
  }) => {
    const { handleChange } = useSelectOption({ state });

    if (multiple)
      return (
        <div
          className={`flex flex-row items-center justify-start w-full z-40 ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          onClick={(e) => {
            if (!disabled) {
              e.stopPropagation();
              handleChange({ value, onChange });
              onClick && onClick(toggle);
            }
          }}
        >
          <Check checked={selected} className="mr-3" />
          <span
            key={key}
            className={`py-2 flex items-center hover:text-indigo-700  w-full ${
              selected ? "text-indigo-700 font-semibold" : " text-gray-600"
            }`}
          >
            {children}
          </span>
        </div>
      );
    else
      return (
        <span
          key={key}
          className={` py-2 flex items-center hover:text-indigo-700  w-full z-40 ${
            selected ? "text-indigo-700 font-semibold" : " text-gray-600"
          } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => {
            onChange(value);
            toggle();
            onClick && onClick(toggle);
          }}
        >
          {children}
        </span>
      );
  }
);
