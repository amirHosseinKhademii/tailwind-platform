import { FC } from "react";

export const SelectOption: FC<ISelectOption> = ({
  children,
  onChange,
  value,
  toggle,
  key,
  selected,
}) => {
  return (
    <span
      key={key}
      className={`cursor-pointer py-2 flex items-center hover:text-indigo-700 w-full ${
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
