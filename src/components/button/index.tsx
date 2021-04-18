import { FC, memo } from "react";

export const Button: FC<IButton> = memo(
  ({ className, children, onClick, disabled, type, role, id }) => {
    return (
      <button
        className={` px-2  rounded focus:outline-none shadow flex items-center justify-center  ${className} ${
          disabled ? "opacity-50" : "hover:opacity-80"
        }`}
        disabled={disabled}
        onClick={onClick}
        type={type}
        id={id}
        role={role}
      >
        {children}
      </button>
    );
  }
);
