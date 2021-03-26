import { FC } from "react";

export const Button: FC<IButton> = ({
  className,
  children,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      className={` px-2 min-h-12 rounded focus:outline-none shadow flex items-center justify-center  ${className} ${
        disabled ? "opacity-50" : "hover:opacity-80"
      }`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
