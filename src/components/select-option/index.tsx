import { FC, useCallback } from "react";

export const SelectOption: FC<ISelectOption> = ({
  children,
  onChange,
  value,
  toggle,
  key,
  selected,
  multiple = false,
  state = [],
}) => {
  const handleChange = useCallback(() => {
    const existed =
      state !== undefined &&
      state.length > 0 &&
      state.find((item) => item === value);
    const payload = existed
      ? [...state.filter((item) => item !== value)]
      : [...state, value];
    onChange(payload);
  }, [state]);

  if (multiple)
    return (
      <div className="flex flex-row items-center justify-start w-full">
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
          onClick={() => handleChange()}
        >
          {children}
        </span>
      </div>
    );
  else
    return (
      <span
        key={key}
        className={`cursor-pointer py-2 flex items-center hover:text-indigo-700  w-full ${
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
};
