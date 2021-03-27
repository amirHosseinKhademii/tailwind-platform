import { FC, memo } from "react";

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
  }) => {
    return (
      <div className={`flex flex-col items-start w-full ${className}`}>
        {label && <label className="text-gray-800 mb-2">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          ref={register({
            required: required ? "This Field Is Required." : undefined,
            validate: (value) => {
              if (!value) return "This Field Is Required.";
              if (max) {
                if (value.length > max)
                  return `This Filed Must Be Less Than ${max} Character.`;
                else return undefined;
              }
              if (min) {
                if (value.length < min)
                  return `This Filed Must Be More Than ${min} Character.`;
                else return undefined;
              }
            },
          })}
          name={name}
          className={` ${
            error
              ? "border-red-400 shadow "
              : "border-gray-400 focus:ring-1  focus:ring-indigo-400"
          } w-full h-12 border  rounded  focus:outline-none focus:shadow px-4 text-gray-600 `}
        />
        {error && typeof error === "string" && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
      </div>
    );
  }
);
