import { FC, memo } from "react";
import { Check } from "components";
import { classNames } from "utils";

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
          slot="wrapper"
          className={classNames(
            "w-full row-start z-40",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <Check
            checked={selected}
            className="mr-3"
            onClick={(e) => {
              if (!disabled) {
                e.stopPropagation();
                handleChange({ value, onChange });
                onClick && onClick(toggle);
              }
            }}
          />
          <span
            slot="child"
            key={key}
            className={classNames(
              "w-full flex items-center py-2 hover:text-indigo-700",
              selected ? "text-indigo-700 font-semibold" : " text-gray-600"
            )}
          >
            {children}
          </span>
        </div>
      );
    else
      return (
        <span
          slot="wrapper"
          key={key}
          className={classNames(
            "w-fullflex items-center py-2 z-40 hover:text-indigo-700",
            selected ? "text-indigo-700 font-semibold" : " text-gray-600",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
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
