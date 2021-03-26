import { FC, memo } from "react";

export const TextArea: FC<ITextArea> = memo(
  ({ error, label, placeholder, register, className, name, required }) => {
    return (
      <div className={`flex flex-col items-start w-full ${className}`}>
        {label && <label className="text-gray-800 mb-2">{label}</label>}
        <textarea
          placeholder={placeholder}
          ref={register({
            required: required ? "This Field Is Required." : false,
          })}
          name={name}
          className={` ${
            error
              ? "border-red-400 "
              : "border-gray-400 focus:ring-1  focus:ring-indigo-400"
          } w-full min-h-12 h-12 border rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-600 `}
        />
        {error && typeof error === "string" && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
      </div>
    );
  }
);
