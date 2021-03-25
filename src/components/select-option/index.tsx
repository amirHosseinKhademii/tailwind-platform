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
      className={`cursor-pointer h-12 flex items-center hover:text-blue-700 w-full ${
        selected ? "text-red-600" : " text-gray-600"
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
