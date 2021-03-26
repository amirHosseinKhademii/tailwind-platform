import { FC, cloneElement, memo } from "react";
import { Controller } from "react-hook-form";
import { ICArrowDown } from "icons";
import { useToggle } from "hooks";
import { useSelect } from "./use-select";

export const Select: FC<ISelect> = memo(
  ({
    error,
    label,
    control,
    className,
    name,
    children,
    value,
    required = false,
    multiple = false,
  }) => {
    const { open, toggle } = useToggle();
    const { validate } = useSelect({ required });

    const SelectBox = memo(() => (
      <div className="w-full flex flex-col">
        <div
          onClick={() => toggle()}
          className={`focus:outline-none  w-full flex flex-row items-center justify-between h-12 cursor-pointer px-4  text-gray-300 rounded border ${
            error ? "border-red-400 shadow" : "border-gray-400"
          }`}
        >
          {multiple ? (
            <div>
              {(value || []).map((val, index) => (
                <span className="text-gray-600 pr-2" key={index}>
                  {val}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-gray-600">{value}</span>
          )}
          <ICArrowDown className="w-5 h-5 text-gray-500" />
        </div>
        {error && typeof error === "string" && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
      </div>
    ));

    const DropBox: FC<ISelect> = memo(({ onChange }) => (
      <div className="w-full h-auto max-h-60 overflow-auto overflow-x-hidden rounded flex flex-col items-start px-4 py-2  z-50 pt-18px  absolute top-1px border-2 shadow border-indigo-400 bg-white">
        {children.length
          ? children.map((child, index) =>
              cloneElement(child, {
                onChange,
                toggle,
                key: index,
                multiple,
                state: value,
              })
            )
          : cloneElement(children, {
              onChange,
              toggle,
              multiple,
              state: value,
            })}
      </div>
    ));

    const BackDrop = memo(() => (
      <div
        className="opacity-0 absolute inset-0 z-0"
        onClick={() => toggle()}
      ></div>
    ));

    return (
      <div className={`flex flex-col items-start w-full ${className}`}>
        {label && <label className="text-gray-800 mb-2">{label}</label>}
        <Controller
          name={name}
          control={control}
          rules={{ validate }}
          render={({ onChange }) => (
            <div className={`flex flex-col w-full relative`}>
              {open ? <DropBox onChange={onChange} /> : <SelectBox />}
            </div>
          )}
        />
        {open && <BackDrop />}
      </div>
    );
  }
);
