import { useValidation } from "hooks";
import { FC, memo } from "react";
import { Error } from "components";

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
  }) => {
    const { validate } = useValidation({ required, max, min, later });

    return (
      <div className={`flex flex-col items-start w-full  ${className}`}>
        {label && (
          <label
            className={` ${
              size === "small"
                ? "text-2xs mb-1 text-gray-700"
                : "mb-2 text-gray-700"
            }`}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          ref={register && register({ validate })}
          name={name}
          disabled={disabled}
          value={value}
          className={` ${
            error
              ? "border-red-400 shadow "
              : "border-gray-300 focus:ring-1  focus:ring-indigo-400"
          } ${
            size === "large"
              ? "h-14 px-4"
              : size === "small"
              ? "h-8 px-2 text-2xs"
              : "h-12 px-4"
          } ${
            disabled && " bg-gray-200"
          } w-full border  rounded  focus:outline-none focus:shadow  text-gray-600 `}
        />
        <Error error={error} />
      </div>
    );
  }
);
