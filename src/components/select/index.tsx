import { FC, cloneElement, memo } from "react";
import { Controller } from "react-hook-form";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";
import { ICChevronDown } from "icons";
import { Input } from "components/input";
import { Button } from "components/button";

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
    register,
    isInput,
    setValue,
    onCancel,
  }) => {
    const { open, toggle } = useToggle();
    const { validate } = useValidation({ required });

    const SelectBox = memo(() => (
      <div className="w-full flex flex-col">
        <div
          onClick={() => toggle()}
          className={`focus:outline-none overflow-hidden  w-full flex flex-row items-center justify-between  cursor-pointer px-4  text-gray-300 rounded border ${
            error ? "border-red-400 shadow" : "border-gray-300"
          } ${multiple ? "min-h-12" : "h-12"}`}
        >
          {multiple && value && value.length ? (
            <div>
              {(value || []).map((val, index) => (
                <span className="text-gray-600 pr-2" key={index}>
                  {val},
                </span>
              ))}
            </div>
          ) : (
            <span className="text-gray-600">{value}</span>
          )}
          <ICChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        <Error error={error} />
      </div>
    ));

    const DropBox: FC<ISelect> = memo(({ onChange }) => (
      <div className="w-full flex flex-col items-start min-h-12 max-h-60 overflow-y-auto rounded  px-4 py-2  z-50 pt-18px  absolute top-1px border-2 shadow border-indigo-400 bg-white">
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
        className="opacity-0 absolute inset-0 z-20"
        onClick={() => toggle()}
      ></div>
    ));

    if (isInput)
      return (
        <div className="w-full flex items-end">
          <Input
            label="CHO Counting"
            name="CHOCounting"
            register={register}
            error={error}
            value={value}
          />
          <Button
            className="h-12 ml-2 bg-cyan-300 text-red-100"
            onClick={() => {
              setValue(name, multiple ? [] : "");
              onCancel();
            }}
          >
            Back
          </Button>
        </div>
      );
    else
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
