import { FC, memo } from "react";
import { useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils/classes";

export const TextArea: FC<ITextArea> = memo(
  ({
    error,
    label,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
  }) => {
    const { validate } = useValidation({ required, max, min });

    return (
      <div
        className={classNames(
          "flex flex-col items-start w-full resize-y",
          className
        )}
      >
        {label && <label className="text-gray-800 mb-2">{label}</label>}
        <textarea
          {...(register && { ...register(name, { validate }) })}
          placeholder={placeholder}
          name={name}
          className={classNames(
            "w-full min-h-12 h-12 border rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-600",
            error
              ? "border-red-400 "
              : "border-gray-300 focus:ring-1  focus:ring-indigo-400"
          )}
        />
        <Error error={error} />
      </div>
    );
  }
);
