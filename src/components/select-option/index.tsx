import { FC, memo } from "react";
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
          {selected ? (
            <div className="w-6 h-6 rounded border border-gray-400 bg-indigo-600  mr-3 cursor-pointer" />
          ) : (
            <div className="w-6 h-6 rounded border border-gray-400  mr-3 cursor-pointer" />
          )}
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
