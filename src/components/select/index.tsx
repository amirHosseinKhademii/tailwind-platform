import { FC, cloneElement } from "react";
import { Controller } from "react-hook-form";
import { useToggle } from "hooks";
import { ICArrowDown } from "icons/arrow-down";

export const Select: FC<ISelect> = ({
  error,
  label,
  control,
  className,
  name,
  children,
  value,
}) => {
  const { open, toggle } = useToggle();

  const SelectBox = () => (
    <div
      onClick={() => toggle()}
      className="focus:outline-none  w-full flex flex-row items-center justify-between h-12 cursor-pointer px-4  text-gray-300 rounded border border-gray-400"
    >
      <span className="text-gray-600">{value}</span>
      <ICArrowDown className="w-5 h-5 text-gray-500" />
    </div>
  );

  const DropBox = ({ onChange }) => (
    <div className="w-full h-auto rounded flex flex-col items-start px-4 py-2  z-50 pt-18px  absolute top-1px border-2 shadow border-indigo-400 bg-white">
      {children.length
        ? children.map((child, index) =>
            cloneElement(child, { onChange, toggle, key: index })
          )
        : cloneElement(children, { onChange, toggle })}
    </div>
  );

  return (
    <div className={`flex flex-col items-start w-full ${className}`}>
      {label && <label className="text-gray-800 mb-2">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => (
          <div className={`flex flex-col w-full relative`}>
            {open ? <DropBox onChange={onChange} /> : <SelectBox />}
          </div>
        )}
      />
    </div>
  );
};
