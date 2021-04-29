import { FC, memo } from "react";
import { useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

export const Input: FC<IInput> = memo(
  ({
    error,
    label,
    type,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
    later,
    size,
    disabled,
    value,
    onClick,
    withError,
    icon,
  }) => {
    const { validate } = useValidation({ required, max, min, later });

    return (
      <div
        className={`flex flex-col items-start w-full  relative ${className}`}
        slot="wrapper"
      >
        {label && (
          <label
            slot="label"
            className={classNames(
              size === "small"
                ? "text-2xs mb-1 text-gray-700"
                : "mb-2 text-gray-700"
            )}
          >
            {label}
          </label>
        )}
        <input
          {...(register && { ...register(name, { validate }) })}
          slot="input"
          type={type}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          value={value}
          onClick={onClick}
          className={classNames(
            " w-full border  rounded  focus:outline-none focus:shadow  text-gray-600 ",
            error || withError
              ? "border-red-400 shadow "
              : "border-gray-300 focus:ring-1  focus:ring-indigo-400",
            size === "large"
              ? "h-14 "
              : size === "small"
              ? "h-8 text-2xs"
              : "h-12",
            disabled && " bg-gray-200",
            icon ? "px-10" : "px-4"
          )}
        />
        {icon && (
          <div
            className={classNames(
              "absolute  left-3",
              label
                ? size === "small"
                  ? "top-6"
                  : "top-12"
                : size === "small"
                ? "top-2"
                : "top-4"
            )}
          >
            {icon()}
          </div>
        )}

        <Error error={error} />
      </div>
    );
  }
);
