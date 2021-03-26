import { FC } from "react";

export const TextArea: FC<ITextArea> = ({
  error,
  label,
  placeholder,
  register,
  className,
  name,
}) => {
  return (
    <div className={`flex flex-col items-start w-full ${className}`}>
      {label && <label className="text-gray-800 mb-2">{label}</label>}
      <textarea
        placeholder={placeholder}
        ref={register}
        name={name}
        className={` ${
          error
            ? "border-red-400 "
            : "border-gray-400 focus:ring-1  focus:ring-indigo-400"
        } w-full min-h-12 h-12 border rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-600 `}
      />
    </div>
  );
};
