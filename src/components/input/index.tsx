import { FC } from "react";

export const Input: FC<IInput> = ({
  error,
  label,
  type,
  placeholder,
  register,
  className,
  wrapperClass,
  name,
}) => {
  return (
    <div className={`flex flex-col items-start w-full ${wrapperClass}`}>
      {label && <label className="text-gray-600 mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        ref={register}
        name={name}
        className={`${className} ${
          error
            ? "border-red-400 "
            : "border-gray-400 focus:ring-1  focus:ring-indigo-400"
        } w-full h-12 border  rounded  focus:outline-none focus:shadow px-4 `}
      />
    </div>
  );
};
