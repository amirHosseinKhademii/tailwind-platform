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
  }) => {
    const { handleChange } = useSelectOption({ state });

    if (multiple)
      return (
        <div
          className="flex flex-row items-center justify-start w-full z-50"
          onClick={() => handleChange({ value, onChange })}
        >
          <Check checked={selected} className="mr-3" />
          <span
            key={key}
            className={`cursor-pointer py-2 flex items-center hover:text-indigo-700  w-full ${
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
          className={`cursor-pointer py-2 flex items-center hover:text-indigo-700  w-full z-50 ${
            selected ? "text-indigo-700 font-semibold" : " text-gray-600"
          }`}
          onClick={() => {
            toggle();
            onChange(value);
          }}
        >
          {children}
        </span>
      );
  }
);
